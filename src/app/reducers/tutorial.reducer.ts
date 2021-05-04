import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'

// Section 1
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}



export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        
        // Add this case:
        case TutorialActions.REMOVE_TUTORIAL:
            const deletedUpdatedArrayFilter = [...state];
             deletedUpdatedArrayFilter.splice(action.payload, 1);
            state=[...deletedUpdatedArrayFilter];
            return state;

            case TutorialActions.LOAD_TUTORIAL_From_Effects:   
              return [...state, ...action.payload]; 
            
         default:
            return state;
    }
}