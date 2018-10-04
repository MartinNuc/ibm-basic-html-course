import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpened = false;

  clickTimestamps = [];

  counter = 0;
  increment() {
    this.counter++;
    this.clickTimestamps.push(new Date());
  }

  toggleDropdown() {
    this.isOpened = !this.isOpened;
  }
}
