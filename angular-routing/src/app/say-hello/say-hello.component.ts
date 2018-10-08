import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-say-hello',
  templateUrl: './say-hello.component.html',
  styleUrls: ['./say-hello.component.css']
})
export class SayHelloComponent implements OnInit {

  name: string;

  constructor(activatedRoute: ActivatedRoute) {
    this.name = activatedRoute.snapshot.params.name;
  }

  ngOnInit() {
  }

}
