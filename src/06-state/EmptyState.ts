import { State } from './State';
import { Ticket } from './Ticket';
import { FullState } from './FullState';
import { WithDataState } from './WithDataState';

export class EmptyState implements State {
  next(): null {
    return null;
  }

  add(ticket: Ticket, quantity: number): void {
    if (ticket.quantity + quantity < ticket.limit) {
      ticket.quantity += quantity;
      ticket.setState = new WithDataState();
    } else if (ticket.quantity + quantity === ticket.limit) {
      ticket.quantity += quantity;
      ticket.setState = new FullState();
    }
  }
}
