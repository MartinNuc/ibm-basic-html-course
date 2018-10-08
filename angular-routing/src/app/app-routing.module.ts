import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SayHelloComponent } from './say-hello/say-hello.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'hello/:name', component: SayHelloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
