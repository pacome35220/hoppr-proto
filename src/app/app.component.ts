import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hoppr-proto';
  ready = true;

  constructor() {
    setTimeout(() => this.ready = true, 5000)
  }
}
