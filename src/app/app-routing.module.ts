import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablemethodsComponent } from './observablemethods/observablemethods.component';

const routes: Routes = [
  { path: 'observablemethod', component: ObservablemethodsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
