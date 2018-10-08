import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimestampService {
  clickTimestamps = [];

  changes$ = new Subject<Date[]>();

  constructor() { }

  recordNewTimestamp() {
    this.clickTimestamps.push(new Date());
    this.changes$.next(this.clickTimestamps);
  }
}
