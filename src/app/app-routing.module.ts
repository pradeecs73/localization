import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablemethodsComponent } from './observablemethods/observablemethods.component';
import {ReactiveformsComponent} from './reactiveforms/reactiveforms.component';
import { NgrxexampleComponent } from './ngrxexample/ngrxexample.component';
import { TutoriallistComponent } from './tutoriallist/tutoriallist.component';
import {configservice} from './service/config.service';
import { PostsComponent } from './posts/posts.component';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';

const routes: Routes = [
  { path: 'observablemethod', component: ObservablemethodsComponent },
  { path: 'form', component: ReactiveformsComponent },
  { path: 'ngrx', component: NgrxexampleComponent },
  { path: 'posts', component: PostsComponent},
  { path: 'tutorials', component: TutoriallistComponent,
    resolve:{resolvedata:configservice}
   },
   { path: 'lazyloading', loadChildren:()=>import('./lazyloading/lazyloading.module').then(m=>m.LazyloadingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
