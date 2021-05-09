import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablemethodsComponent } from './observablemethods/observablemethods.component';
import {ReactiveformsComponent} from './reactiveforms/reactiveforms.component';
import { NgrxexampleComponent } from './ngrxexample/ngrxexample.component';
import { TutoriallistComponent } from './tutoriallist/tutoriallist.component';
import {configservice} from './service/config.service';

const routes: Routes = [
  { path: 'observablemethod', component: ObservablemethodsComponent },
  { path: 'form', component: ReactiveformsComponent },
  { path: 'ngrx', component: NgrxexampleComponent },
  { path: 'tutorials', component: TutoriallistComponent,
    resolve:{resolvedata:configservice}
   }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
