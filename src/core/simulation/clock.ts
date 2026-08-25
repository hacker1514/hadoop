export type SimulationSpeed = 0.1 | 0.25 | 0.5 | 1 | 2 | 5 | 10 | 50 | 100;

export interface ClockTickListener {
  (virtualTime: number, deltaMs: number): void;
}

export class SimulationClock {
  private virtualTime: number; // Virtual milliseconds since start
  private speed: SimulationSpeed = 1;
  private isRunning: boolean = false;
  private timerId: number | null = null;
  private listeners: Set<ClockTickListener> = new Set();
  private tickIntervalMs: number = 100; // Real-world update tick

  constructor(initialVirtualTime: number = 0) {
    this.virtualTime = initialVirtualTime;
  }

  public start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.scheduleNextTick();
  }

  public pause(): void {
    this.isRunning = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public setSpeed(newSpeed: SimulationSpeed): void {
    this.speed = newSpeed;
  }

  public getSpeed(): SimulationSpeed {
    return this.speed;
  }

  public getTime(): number {
    return this.virtualTime;
  }

  public setTime(time: number): void {
    this.virtualTime = time;
  }

  public isActive(): boolean {
    return this.isRunning;
  }

  public advanceBy(virtualDeltaMs: number): void {
    this.virtualTime += virtualDeltaMs;
    this.notifyListeners(virtualDeltaMs);
  }

  public subscribe(listener: ClockTickListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private scheduleNextTick(): void {
    if (!this.isRunning) return;
    this.timerId = window.setTimeout(() => {
      if (!this.isRunning) return;
      const virtualDelta = this.tickIntervalMs * this.speed;
      this.virtualTime += virtualDelta;
      this.notifyListeners(virtualDelta);
      this.scheduleNextTick();
    }, this.tickIntervalMs);
  }

  private notifyListeners(deltaMs: number): void {
    this.listeners.forEach((listener) => listener(this.virtualTime, deltaMs));
  }
}
