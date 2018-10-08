import { Component } from '@angular/core';
import { TimestampService } from './timestamp.service';
import { interval, Subscription, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpened = false;

  counter = 0;

  obj = {
    'color-red': true,
    'size-large': true
  };

  subject$ = new Subject<any>();
  constructor(public timestampService: TimestampService) {}

  startObservable() {
    this.subject$.subscribe(val => {
      console.log(val);
    });
  }

  switchColor() {
    this.subject$.next('hello');
    this.obj['color-red'] = !this.obj['color-red'];
  }

  switchSize() {
    this.obj['size-large'] = !this.obj['size-large'];
  }

  increment() {
    this.counter++;
    this.timestampService.recordNewTimestamp();
  }

  toggleDropdown() {
    this.isOpened = !this.isOpened;
  }
}
