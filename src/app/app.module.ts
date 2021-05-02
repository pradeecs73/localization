import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablemethodsComponent } from './observablemethods/observablemethods.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { NgrxexampleComponent } from './ngrxexample/ngrxexample.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { TutoriallistComponent } from './tutoriallist/tutoriallist.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablemethodsComponent,
    ReactiveformsComponent,
    NgrxexampleComponent,
    ReadComponent,
    CreateComponent,
    TutoriallistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tutorial: reducer
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
