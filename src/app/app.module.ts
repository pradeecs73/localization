import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ObservablemethodsComponent } from './observablemethods/observablemethods.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { NgrxexampleComponent } from './ngrxexample/ngrxexample.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { TutoriallistComponent } from './tutoriallist/tutoriallist.component';
import { EffectsModule } from '@ngrx/effects';
import {TutorialEffects} from './effects/tutorial.effect';
import { InterceptService} from './interceptor/httpconfig.interceptor';
import {configservice} from './service/config.service';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablemethodsComponent,
    ReactiveformsComponent,
    NgrxexampleComponent,
    ReadComponent,
    CreateComponent,
    TutoriallistComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,

    StoreModule.forRoot({
      tutorial: reducer
    }),
    EffectsModule.forRoot([TutorialEffects])

  ],
  providers: [configservice,{provide: HTTP_INTERCEPTORS, useClass: InterceptService,  multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
