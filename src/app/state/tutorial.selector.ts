import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import { createFeatureSelector,createSelector } from '@ngrx/store';

const getTutorialState=createFeatureSelector<Tutorial>('tutorial');

export const getName=createSelector(getTutorialState,(state,inputobj)=>{
    console.log(inputobj)
      return state[0].name;
});

export const getUrl=createSelector(getTutorialState,(state,inputobj)=>{
    console.log(inputobj);
    return state[0].url;
});