import { BlockId } from '../../core/domain/types';

export class VirtualStorageEngine {
  private inMemoryBlocks: Map<BlockId, Uint8Array> = new Map();
  private dbName = 'HadoopSimulatorOPFS';

  constructor() {
    this.initIndexedDB();
  }

  private initIndexedDB(): void {
    if (typeof window !== 'undefined' && 'indexedDB' in window) {
      const request = indexedDB.open(this.dbName, 1);
      request.onupgradeneeded = (e: any) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('blocks')) {
          db.createObjectStore('blocks');
        }
      };
    }
  }

  public async writeBlockData(blockId: BlockId, data: Uint8Array): Promise<void> {
    this.inMemoryBlocks.set(blockId, data);

    
    if (typeof window !== 'undefined' && 'indexedDB' in window) {
      try {
        const request = indexedDB.open(this.dbName, 1);
        request.onsuccess = (e: any) => {
          const db = e.target.result;
          const tx = db.transaction('blocks', 'readwrite');
          const store = tx.objectStore('blocks');
          store.put(data, blockId);
        };
      } catch (err) {
        console.warn('IndexedDB write warning:', err);
      }
    }
  }

  public async readBlockData(blockId: BlockId): Promise<Uint8Array | undefined> {
    if (this.inMemoryBlocks.has(blockId)) {
      return this.inMemoryBlocks.get(blockId);
    }
    return undefined;
  }

  public deleteBlockData(blockId: BlockId): void {
    this.inMemoryBlocks.delete(blockId);
  }

  public calculateChecksum(data: Uint8Array): string {
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      hash = (hash << 5) - hash + data[i];
      hash |= 0;
    }
    return 'crc32_' + (hash >>> 0).toString(16);
  }
}
