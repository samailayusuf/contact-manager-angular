import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import store from '../../store/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contacts:any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts(){
    this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(
      response => {
        if(store){
        console.log(response);
        this.contacts = response
        }//End If
      }
    );
  }

}
