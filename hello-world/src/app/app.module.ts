import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TimestampListComponent } from './timestamp-list/timestamp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TimestampListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
