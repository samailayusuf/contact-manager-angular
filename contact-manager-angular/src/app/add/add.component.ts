import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Contact } from '../../model/contact.model'
import * as ContactActions from '../../actions/contact.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor( private store: Store<AppState> ) { }

  addContact(id:number, name:string, email:string, phone:string) {
    this.store.dispatch(new ContactActions.AddContact({id:Math.floor(Math.random()*10000), name, email, phone}) )
    console.log(this.store)
  }

  ngOnInit(): void {
  }

}
