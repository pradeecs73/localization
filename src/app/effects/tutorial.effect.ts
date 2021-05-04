import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as TutorialActions from './../actions/tutorial.actions';
import {map,switchMap,catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import { ajax } from 'rxjs/ajax';


@Injectable()
export class TutorialEffects {
    constructor(private actions$: Actions) { }

    @Effect() loadTutorial$ =this.actions$.pipe(
        ofType(TutorialActions.LOAD_TUTORIAL),   
        switchMap(()=>{
               return ajax('https://jsonplaceholder.typicode.com/posts').pipe(
                   map((posts:any) =>{
                    return  new TutorialActions.LoadTutorialFromEffects([{name:posts.response[0].title, url: 'http://mysite.com'},
                      {name:posts.response[1].title, url: 'http://mysite.com'}])
                    }),
                   catchError((error:any)=>of(1, 2, 3, 4, 5))
               )
          })
        )
    
}

