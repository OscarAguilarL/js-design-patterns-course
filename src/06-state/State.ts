import { Ticket } from './Ticket';

export interface State {
  next(ticket: Ticket): number | null;

  add(ticket: Ticket, quantity: number): void;
}
