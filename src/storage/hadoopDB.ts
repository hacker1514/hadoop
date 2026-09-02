const DB_NAME = 'hadoop-lab-db';
const DB_VERSION = 1;

const STORE_LOCAL_FILES = 'localFiles';
const STORE_LOCAL_DIRS = 'localDirs';
const STORE_HDFS_CONTENT = 'hdfsFileContent';
const STORE_COMMAND_HISTORY = 'commandHistory';
const STORE_SHELL_STATE = 'shellState';

export interface ShellState {
  isHDFSStarted: boolean;
  isYARNStarted: boolean;
  localDir: string;
  kerberosTicket: string | null;
  activeNameNodeId: string;
}

export class HadoopDB {
  private db: IDBDatabase | null = null;
  private ready: Promise<void>;

  constructor() {
    this.ready = this.open();
  }

  private open(): Promise<void> {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);

      req.onupgradeneeded = (e) => {
        const db = (e.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_LOCAL_FILES)) {
          db.createObjectStore(STORE_LOCAL_FILES);
        }
        if (!db.objectStoreNames.contains(STORE_LOCAL_DIRS)) {
          db.createObjectStore(STORE_LOCAL_DIRS);
        }
        if (!db.objectStoreNames.contains(STORE_HDFS_CONTENT)) {
          db.createObjectStore(STORE_HDFS_CONTENT);
        }
        if (!db.objectStoreNames.contains(STORE_COMMAND_HISTORY)) {
          db.createObjectStore(STORE_COMMAND_HISTORY);
        }
        if (!db.objectStoreNames.contains(STORE_SHELL_STATE)) {
          db.createObjectStore(STORE_SHELL_STATE);
        }
      };

      req.onsuccess = (e) => {
        this.db = (e.target as IDBOpenDBRequest).result;
        resolve();
      };

      req.onerror = () => reject(req.error);
    });
  }

  async waitReady(): Promise<void> {
    return this.ready;
  }

  private tx(stores: string | string[], mode: IDBTransactionMode = 'readonly'): IDBTransaction {
    if (!this.db) throw new Error('DB not open');
    return this.db.transaction(stores, mode);
  }

  private get<T>(store: string, key: string): Promise<T | undefined> {
    return new Promise((resolve, reject) => {
      const req = this.tx(store).objectStore(store).get(key);
      req.onsuccess = () => resolve(req.result as T | undefined);
      req.onerror = () => reject(req.error);
    });
  }

  private put(store: string, key: string, value: unknown): Promise<void> {
    return new Promise((resolve, reject) => {
      const req = this.tx(store, 'readwrite').objectStore(store).put(value, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  private del(store: string, key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const req = this.tx(store, 'readwrite').objectStore(store).delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  private getAllKeys(store: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const req = this.tx(store).objectStore(store).getAllKeys();
      req.onsuccess = () => resolve(req.result as string[]);
      req.onerror = () => reject(req.error);
    });
  }

  private getAll<T>(store: string): Promise<T[]> {
    return new Promise((resolve, reject) => {
      const req = this.tx(store).objectStore(store).getAll();
      req.onsuccess = () => resolve(req.result as T[]);
      req.onerror = () => reject(req.error);
    });
  }

  async saveLocalFile(path: string, content: string): Promise<void> {
    await this.put(STORE_LOCAL_FILES, path, content);
  }

  async loadLocalFile(path: string): Promise<string | undefined> {
    return this.get<string>(STORE_LOCAL_FILES, path);
  }

  async deleteLocalFile(path: string): Promise<void> {
    await this.del(STORE_LOCAL_FILES, path);
  }

  async loadAllLocalFiles(): Promise<Map<string, string>> {
    const keys = await this.getAllKeys(STORE_LOCAL_FILES);
    const values = await this.getAll<string>(STORE_LOCAL_FILES);
    const map = new Map<string, string>();
    keys.forEach((k, i) => map.set(k, values[i]));
    return map;
  }

  async saveLocalDir(path: string): Promise<void> {
    await this.put(STORE_LOCAL_DIRS, path, true);
  }

  async deleteLocalDir(path: string): Promise<void> {
    await this.del(STORE_LOCAL_DIRS, path);
  }

  async loadAllLocalDirs(): Promise<Set<string>> {
    const keys = await this.getAllKeys(STORE_LOCAL_DIRS);
    return new Set(keys);
  }

  async saveHdfsFileContent(path: string, content: string): Promise<void> {
    await this.put(STORE_HDFS_CONTENT, path, content);
  }

  async loadHdfsFileContent(path: string): Promise<string | undefined> {
    return this.get<string>(STORE_HDFS_CONTENT, path);
  }

  async loadAllHdfsFileContents(): Promise<Map<string, string>> {
    const keys = await this.getAllKeys(STORE_HDFS_CONTENT);
    const values = await this.getAll<string>(STORE_HDFS_CONTENT);
    const map = new Map<string, string>();
    keys.forEach((k, i) => map.set(k, values[i]));
    return map;
  }

  async saveCommandHistory(history: string[]): Promise<void> {
    await this.put(STORE_COMMAND_HISTORY, 'history', history);
  }

  async loadCommandHistory(): Promise<string[]> {
    const result = await this.get<string[]>(STORE_COMMAND_HISTORY, 'history');
    return result ?? [];
  }

  async saveShellState(state: ShellState): Promise<void> {
    await this.put(STORE_SHELL_STATE, 'state', state);
  }

  async loadShellState(): Promise<ShellState | undefined> {
    return this.get<ShellState>(STORE_SHELL_STATE, 'state');
  }

  async getStorageEstimate(): Promise<{ usageBytes: number; quotaBytes: number }> {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      const est = await navigator.storage.estimate();
      return {
        usageBytes: est.usage ?? 0,
        quotaBytes: est.quota ?? 0
      };
    }
    return { usageBytes: 0, quotaBytes: 0 };
  }
}
