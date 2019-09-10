import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-bar',
  templateUrl: './contact-bar.component.html',
  styleUrls: ['./contact-bar.component.scss']
})
export class ContactBarComponent implements OnInit {

  contacts: string[] = [
    "Yed",
    "Yedd",
    "Yeddd",
    "Yedddd",
    "Yeddddd",
  ]

  active: number = Math.round(Math.random() * 100 % this.contacts.length - 1);

  constructor() { }

  ngOnInit() {
  }

}
