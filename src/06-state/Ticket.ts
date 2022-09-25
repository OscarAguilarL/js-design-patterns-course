import { State } from './State';
import { EmptyState } from "./EmptyState";


export class Ticket {
  quantity: number;
  readonly limit: number;
  private state: State;
  private number: number;

  constructor(limit: number) {
    this.limit = limit;
    this.quantity = 0;
    this.number = 0;
    this.state = new EmptyState();
  }

  get getNumber(): number {
    return this.number++;
  }

  set setState(state: State) {
    this.state = state;
  }

  get getState() {
    return this.state;
  }

  next(): number | null {
    return this.state.next(this);
  }

  add(quantity: number): void {
    this.state.add(this, quantity);
  }
}
