import { SimulationEvent } from '../events/eventStore';

export interface ScheduledEvent {
  scheduledTime: number;
  sequenceId: number;
  event: SimulationEvent;
  action: () => void;
}

export class PriorityQueue {
  private heap: ScheduledEvent[] = [];
  private sequenceCounter = 0;

  public enqueue(event: SimulationEvent, scheduledTime: number, action: () => void): ScheduledEvent {
    this.sequenceCounter++;
    const scheduledItem: ScheduledEvent = {
      scheduledTime,
      sequenceId: this.sequenceCounter,
      event,
      action
    };
    this.heap.push(scheduledItem);
    this.bubbleUp(this.heap.length - 1);
    return scheduledItem;
  }

  public dequeue(): ScheduledEvent | undefined {
    if (this.heap.length === 0) return undefined;
    const top = this.heap[0];
    const bottom = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = bottom;
      this.sinkDown(0);
    }
    return top;
  }

  public peek(): ScheduledEvent | undefined {
    return this.heap[0];
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }

  public size(): number {
    return this.heap.length;
  }

  public clear(): void {
    this.heap = [];
    this.sequenceCounter = 0;
  }

  private compare(a: ScheduledEvent, b: ScheduledEvent): number {
    if (a.scheduledTime !== b.scheduledTime) {
      return a.scheduledTime - b.scheduledTime;
    }
    return a.sequenceId - b.sequenceId;
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parentIdx]) < 0) {
        [this.heap[index], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[index]];
        index = parentIdx;
      } else {
        break;
      }
    }
  }

  private sinkDown(index: number): void {
    const length = this.heap.length;
    while (true) {
      const leftIdx = 2 * index + 1;
      const rightIdx = 2 * index + 2;
      let smallestIdx = index;

      if (leftIdx < length && this.compare(this.heap[leftIdx], this.heap[smallestIdx]) < 0) {
        smallestIdx = leftIdx;
      }
      if (rightIdx < length && this.compare(this.heap[rightIdx], this.heap[smallestIdx]) < 0) {
        smallestIdx = rightIdx;
      }

      if (smallestIdx !== index) {
        [this.heap[index], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[index]];
        index = smallestIdx;
      } else {
        break;
      }
    }
  }
}
