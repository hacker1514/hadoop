// Seeded Mulberry32 Pseudo-Random Number Generator for Deterministic Replay
export class SeededRNG {
  private state: number;

  constructor(seed: number = 12345) {
    this.state = seed;
  }

  public nextFloat(): number {
    let t = (this.state += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  public nextInt(min: number, max: number): number {
    return Math.floor(this.nextFloat() * (max - min + 1)) + min;
  }

  public pickOne<T>(items: T[]): T {
    const idx = Math.floor(this.nextFloat() * items.length);
    return items[idx];
  }

  public reset(seed: number): void {
    this.state = seed;
  }

  public getState(): number {
    return this.state;
  }
}
