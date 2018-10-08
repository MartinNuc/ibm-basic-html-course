import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TimestampListComponent } from './timestamp-list/timestamp-list.component';
import { RememberButtonComponent } from './remember-button/remember-button.component';
import { ItemsCountComponent } from './items-count/items-count.component';
import { JokeComponent } from './joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TimestampListComponent,
    RememberButtonComponent,
    ItemsCountComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
