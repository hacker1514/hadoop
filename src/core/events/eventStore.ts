export type EventCategory = 'HDFS' | 'YARN' | 'MAPREDUCE' | 'NETWORK' | 'FAILURE' | 'SYSTEM';

export interface SimulationEvent {
  eventId: string;
  timestamp: number;
  type: string;
  category: EventCategory;
  source: string;
  target?: string;
  payload: Record<string, unknown>;
  simulationVersion: number;
}

export type EventListener = (event: SimulationEvent) => void;

export class EventStore {
  private events: SimulationEvent[] = [];
  private listeners: Set<EventListener> = new Set();
  private eventCounter = 0;

  public createEvent(
    type: string,
    category: EventCategory,
    source: string,
    payload: Record<string, unknown> = {},
    timestamp: number = Date.now(),
    target?: string
  ): SimulationEvent {
    this.eventCounter++;
    const event: SimulationEvent = {
      eventId: `evt_${this.eventCounter.toString().padStart(6, '0')}`,
      timestamp,
      type,
      category,
      source,
      target,
      payload,
      simulationVersion: 1
    };
    return event;
  }

  public record(event: SimulationEvent): void {
    this.events.push(event);
    this.listeners.forEach((listener) => listener(event));
  }

  public getEvents(): readonly SimulationEvent[] {
    return this.events;
  }

  public getEventsByCategory(category: EventCategory): SimulationEvent[] {
    return this.events.filter((e) => e.category === category);
  }

  public getEventsUpTo(timestamp: number): SimulationEvent[] {
    return this.events.filter((e) => e.timestamp <= timestamp);
  }

  public getEventIndex(eventId: string): number {
    return this.events.findIndex((e) => e.eventId === eventId);
  }

  public subscribe(listener: EventListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  public clear(): void {
    this.events = [];
    this.eventCounter = 0;
  }

  public loadFromSnapshot(events: SimulationEvent[]): void {
    this.events = [...events];
    this.eventCounter = events.length;
  }
}
