import { INode, INodeDirectory, INodeFile, PathString } from '../../core/domain/types';

export class HDFSQuotaError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'HDFSQuotaError';
  }
}

export class HDFSNamespace {
  private root: INodeDirectory;
  private snapshots: Map<string, INodeDirectory> = new Map();

  constructor() {
    this.root = {
      name: '',
      path: '/',
      type: 'DIRECTORY',
      owner: 'hdfs',
      group: 'supergroup',
      permissions: 'drwxr-xr-x',
      createdAt: Date.now(),
      modifiedAt: Date.now(),
      children: new Map()
    };
  }

  public getRoot(): INodeDirectory {
    return this.root;
  }

  public normalizePath(pathStr: string): PathString {
    if (!pathStr || pathStr === '/') return '/';
    const parts = pathStr.split('/').filter(Boolean);
    return '/' + parts.join('/');
  }

  public resolvePath(pathStr: string): INode | undefined {
    const norm = this.normalizePath(pathStr);
    if (norm === '/') return this.root;

    const parts = norm.split('/').filter(Boolean);
    let current: INode = this.root;

    for (const part of parts) {
      if (current.type !== 'DIRECTORY') return undefined;
      const next = current.children.get(part);
      if (!next) return undefined;
      current = next;
    }
    return current;
  }

  public mkdir(pathStr: string, recursive: boolean = true, owner: string = 'user'): INodeDirectory {
    const norm = this.normalizePath(pathStr);
    if (norm === '/') return this.root;

    const parts = norm.split('/').filter(Boolean);
    let current: INodeDirectory = this.root;
    let currentPath = '';

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      currentPath += '/' + part;
      let next = current.children.get(part);

      if (!next) {
        if (i < parts.length - 1 && !recursive) {
          throw new Error(`Parent directory does not exist: ${currentPath}`);
        }
        
        if (current.quotaNamespace && current.children.size >= current.quotaNamespace) {
          throw new HDFSQuotaError(`Namespace quota exceeded on directory ${current.path}`);
        }

        const newDir: INodeDirectory = {
          name: part,
          path: currentPath,
          type: 'DIRECTORY',
          owner,
          group: 'supergroup',
          permissions: 'drwxr-xr-x',
          createdAt: Date.now(),
          modifiedAt: Date.now(),
          children: new Map()
        };
        current.children.set(part, newDir);
        current.modifiedAt = Date.now();
        current = newDir;
      } else if (next.type === 'DIRECTORY') {
        current = next;
      } else {
        throw new Error(`File exists at path component: ${currentPath}`);
      }
    }
    return current;
  }

  public createFile(
    pathStr: string,
    sizeBytes: number,
    replicationFactor: number = 3,
    blockSizeBytes: number = 134217728,
    owner: string = 'user'
  ): INodeFile {
    const norm = this.normalizePath(pathStr);
    const parentPath = norm.substring(0, norm.lastIndexOf('/')) || '/';
    const fileName = norm.substring(norm.lastIndexOf('/') + 1);

    const parentDir = this.mkdir(parentPath, true, owner);

    if (parentDir.quotaNamespace && parentDir.children.size >= parentDir.quotaNamespace) {
      throw new HDFSQuotaError(`Namespace quota exceeded on directory ${parentDir.path}`);
    }

    if (parentDir.quotaStorageBytes && sizeBytes * replicationFactor > parentDir.quotaStorageBytes) {
      throw new HDFSQuotaError(`Storage quota exceeded on directory ${parentDir.path}`);
    }

    const file: INodeFile = {
      name: fileName,
      path: norm,
      type: 'FILE',
      owner,
      group: 'supergroup',
      permissions: '-rw-r--r--',
      createdAt: Date.now(),
      modifiedAt: Date.now(),
      sizeBytes,
      replicationFactor,
      blockSizeBytes,
      blocks: []
    };

    parentDir.children.set(fileName, file);
    parentDir.modifiedAt = Date.now();
    return file;
  }

  public deletePath(pathStr: string, recursive: boolean = false): boolean {
    const norm = this.normalizePath(pathStr);
    if (norm === '/') throw new Error('Cannot delete root directory');

    const parentPath = norm.substring(0, norm.lastIndexOf('/')) || '/';
    const name = norm.substring(norm.lastIndexOf('/') + 1);

    const parent = this.resolvePath(parentPath);
    if (!parent || parent.type !== 'DIRECTORY') return false;

    const target = parent.children.get(name);
    if (!target) return false;

    if (target.type === 'DIRECTORY' && target.children.size > 0 && !recursive) {
      throw new Error(`Directory is not empty: ${norm}`);
    }

    parent.children.delete(name);
    parent.modifiedAt = Date.now();
    return true;
  }

  public createSnapshot(dirPath: string, snapshotName: string): string {
    const dir = this.resolvePath(dirPath);
    if (!dir || dir.type !== 'DIRECTORY') {
      throw new Error(`Directory not found for snapshot: ${dirPath}`);
    }
    const snapKey = `${dirPath}/.snapshot/${snapshotName}`;
    this.snapshots.set(snapKey, JSON.parse(JSON.stringify(dir)));
    return snapKey;
  }

  public getSnapshots(): string[] {
    return Array.from(this.snapshots.keys());
  }

  public setQuota(dirPath: string, nsQuota?: number, storageQuota?: number): void {
    const dir = this.resolvePath(dirPath);
    if (!dir || dir.type !== 'DIRECTORY') {
      throw new Error(`Directory not found: ${dirPath}`);
    }
    dir.quotaNamespace = nsQuota;
    dir.quotaStorageBytes = storageQuota;
  }
}
