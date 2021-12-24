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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MaterialComponent } from './material/material.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { CowComponent } from './cow/cow.component';
import { SheepComponent } from './sheep/sheep.component';
import { DynamiccontentComponent } from './dynamiccontent/dynamiccontent.component';
import { DynamiccomponentComponent } from './dynamiccomponent/dynamiccomponent.component';
import { PlaceHolder } from './directives/placeholder.directive';
import { StylingcomponentComponent } from './stylingcomponent/stylingcomponent.component';
import {SharedModule} from './sharedmodule/sharedmodule'
import { userreducer } from './reducers/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ObservablemethodsComponent,
    ReactiveformsComponent,
    NgrxexampleComponent,
    ReadComponent,
    CreateComponent,
    TutoriallistComponent,
    PostsComponent,
    MaterialComponent,
    CowComponent,
    SheepComponent,
    DynamiccontentComponent,
    DynamiccomponentComponent,
    PlaceHolder,
    StylingcomponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    StoreModule.forRoot({
      tutorial: reducer,
      user:userreducer
    }),
    EffectsModule.forRoot([TutorialEffects]),
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule.forRoot()

  ],
  entryComponents:[CowComponent,SheepComponent],
  providers: [configservice,{provide: HTTP_INTERCEPTORS, useClass: InterceptService,  multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
