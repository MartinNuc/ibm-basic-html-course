import { Component, OnInit } from '@angular/core';
import { TimestampService } from '../timestamp.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-items-count',
  templateUrl: './items-count.component.html',
  styleUrls: ['./items-count.component.css']
})
export class ItemsCountComponent implements OnInit {

  count$ = this.serv.changes$.pipe(
    map(array => array.length)
  );

  constructor(public serv: TimestampService) {
  }

  ngOnInit() {
  }
}
