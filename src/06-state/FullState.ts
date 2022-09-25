import { EmptyState } from './EmptyState';
import { State } from './State';
import { Ticket } from './Ticket';
import { WithDataState } from './WithDataState';


export class FullState implements State {
  next(ticket: Ticket): number {
    ticket.quantity--;

    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState();
    } else {
      ticket.setState = new WithDataState();
    }

    return ticket.getNumber;
  }

  add(): void {
    console.log('ticket lleno');
  }
}
