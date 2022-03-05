import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  @Input() contactName: string ="";
  @Input() contactEmail: string ="";
  @Input() contactPhone: string ="";
  @Input() contactID: number=0

  public gfg = true;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
