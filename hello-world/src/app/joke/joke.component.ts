import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  joke: Joke;

  constructor(public quotesService: QuotesService) {
    this.loadJoke();
  }

  loadJoke() {
    this.quotesService
      .fetchRandomJoke()
      .subscribe(response => this.joke = response);
  }

  ngOnInit() {}
}
