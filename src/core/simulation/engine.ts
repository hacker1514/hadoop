import { SimulationClock, SimulationSpeed } from './clock';
import { PriorityQueue, ScheduledEvent } from './priorityQueue';
import { EventStore, EventCategory } from '../events/eventStore';
import { SeededRNG } from './rng';

export type StateChangeListener = () => void;

export class SimulationEngine {
  private clock: SimulationClock;
  private priorityQueue: PriorityQueue;
  private eventStore: EventStore;
  private rng: SeededRNG;
  private stateListeners: Set<StateChangeListener> = new Set();
  private seed: number;

  constructor(seed: number = 12345) {
    this.seed = seed;
    this.clock = new SimulationClock(0);
    this.priorityQueue = new PriorityQueue();
    this.eventStore = new EventStore();
    this.rng = new SeededRNG(seed);

    // Whenever clock ticks, process events scheduled up to virtualTime
    this.clock.subscribe((virtualTime) => {
      this.processEventsUpTo(virtualTime);
    });
  }

  public getClock(): SimulationClock {
    return this.clock;
  }

  public getEventStore(): EventStore {
    return this.eventStore;
  }

  public getRNG(): SeededRNG {
    return this.rng;
  }

  public getSeed(): number {
    return this.seed;
  }

  public scheduleEvent(
    type: string,
    category: EventCategory,
    source: string,
    delayVirtualMs: number,
    action: () => void,
    payload: Record<string, unknown> = {},
    target?: string
  ): ScheduledEvent {
    const scheduledTime = this.clock.getTime() + Math.max(0, delayVirtualMs);
    const event = this.eventStore.createEvent(type, category, source, payload, scheduledTime, target);
    const item = this.priorityQueue.enqueue(event, scheduledTime, () => {
      this.eventStore.record(event);
      action();
      this.notifyStateChange();
    });
    return item;
  }

  public processEventsUpTo(time: number): number {
    let processedCount = 0;
    while (!this.priorityQueue.isEmpty()) {
      const peekItem = this.priorityQueue.peek();
      if (!peekItem || peekItem.scheduledTime > time) {
        break;
      }
      const item = this.priorityQueue.dequeue()!;
      this.clock.setTime(item.scheduledTime);
      item.action();
      processedCount++;
    }
    if (processedCount > 0) {
      this.notifyStateChange();
    }
    return processedCount;
  }

  public stepOneEvent(): boolean {
    if (this.priorityQueue.isEmpty()) return false;
    const item = this.priorityQueue.dequeue()!;
    this.clock.setTime(item.scheduledTime);
    item.action();
    this.notifyStateChange();
    return true;
  }

  public stepEvents(count: number): number {
    let done = 0;
    for (let i = 0; i < count; i++) {
      if (this.stepOneEvent()) {
        done++;
      } else {
        break;
      }
    }
    return done;
  }

  public stepTime(deltaMs: number): number {
    const targetTime = this.clock.getTime() + deltaMs;
    const processed = this.processEventsUpTo(targetTime);
    this.clock.setTime(targetTime);
    this.notifyStateChange();
    return processed;
  }

  public play(): void {
    this.clock.start();
  }

  public pause(): void {
    this.clock.pause();
  }

  public setSpeed(speed: SimulationSpeed): void {
    this.clock.setSpeed(speed);
  }

  public subscribeStateChange(listener: StateChangeListener): () => void {
    this.stateListeners.add(listener);
    return () => this.stateListeners.delete(listener);
  }

  public notifyStateChange(): void {
    this.stateListeners.forEach((listener) => listener());
  }

  public reset(newSeed: number = this.seed): void {
    this.pause();
    this.seed = newSeed;
    this.clock.setTime(0);
    this.priorityQueue.clear();
    this.eventStore.clear();
    this.rng.reset(newSeed);
    this.notifyStateChange();
  }
}
