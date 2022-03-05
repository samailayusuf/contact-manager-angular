import { Contact } from '../model/contact.model';

export interface AppState {
  readonly contact: Contact[];
}