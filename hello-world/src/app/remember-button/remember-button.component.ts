import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-remember-button',
  templateUrl: './remember-button.component.html',
  styleUrls: ['./remember-button.component.css']
})
export class RememberButtonComponent implements OnInit {

  @Output()
  remember = new EventEmitter();

  constructor() { }

  emitThat() {
    this.remember.emit();
  }

  ngOnInit() {
  }

}
