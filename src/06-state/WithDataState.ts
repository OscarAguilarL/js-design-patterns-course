import { EmptyState } from './EmptyState';
import { State } from './State';
import { Ticket } from './Ticket';
import { FullState } from "./FullState";


export class WithDataState implements State {
  next(ticket: Ticket): number {
    ticket.quantity--;

    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState();
    }

    return ticket.getNumber;
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
