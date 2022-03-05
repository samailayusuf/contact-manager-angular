
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Contact } from './../model/contact.model'


export const ADD_CONTACT       = '[CONTACT] Add'
export const REMOVE_CONTACT    = '[CONTACT] Remove'
export const ADD_ALL_CONTACTS  = '[ALL_CONTACTS] Add'


export class AddContact implements Action {
    readonly type = ADD_CONTACT

    constructor(public payload: Contact) {}
}

export class AddAllContact implements Action {
    readonly type = ADD_ALL_CONTACTS

    constructor(public payload: Contact) {}
}

export class RemoveContact implements Action {
    readonly type = REMOVE_CONTACT

    constructor(public payload: number) {}
}


export type Actions = AddContact | RemoveContact
