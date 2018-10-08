import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  secretVariable = 'hi';

  constructor() { }

  ngOnInit() {
  }

  sayHello() {
    console.log('hi');
  }

}
