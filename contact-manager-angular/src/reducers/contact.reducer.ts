import { Action } from '@ngrx/store'
import { Contact } from './../model/contact.model'
import * as ContactActions from './../actions/contact.action'

// Section 1
// const initialState: Contact = {
//     id: 1,
//     name: 'Yusuf samaila',
//     email: 'yusuf@gmail.com',
//     phone: '123-456-'
// }

// Section 2
export function reducer(state: Contact[] = [], action: Action) {
    const contactAction = action as ContactActions.Actions;
    // Section 3
    switch(contactAction.type) {
        case ContactActions.ADD_CONTACT:
            return [...state, contactAction.payload];
        default:
            return state;
    }
}