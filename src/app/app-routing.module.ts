import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablemethodsComponent } from './observablemethods/observablemethods.component';
import {ReactiveformsComponent} from './reactiveforms/reactiveforms.component';

const routes: Routes = [
  { path: 'observablemethod', component: ObservablemethodsComponent },
  { path: 'form', component: ReactiveformsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
