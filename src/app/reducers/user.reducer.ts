import { User } from './../models/tutorial.model'
import * as UserActions from './../actions/user.actions'
import {EntityState,createEntityAdapter} from '@ngrx/entity'
import { createFeatureSelector,createSelector } from '@ngrx/store';


// Section 1


export const UserAdapter=createEntityAdapter<User>()
export interface UserState extends EntityState<User>{
    entities:any;
}

const userFirstState:UserState= {
    ids:[],
    entities:[]

}

export const initialState:UserState=UserAdapter.getInitialState(userFirstState)


export function userreducer(state: UserState= initialState, action: UserActions.Actions) {
    switch(action.type) {
        case UserActions.ADD_USER:
           // return [...state, action.payload];
           return UserAdapter.addOne(action.payload,state)
        
        // Add this case:
        case UserActions.REMOVE_USER:
            return UserAdapter.removeOne(action.payload,state);
            
         default:
            return state;
    }
}

export const getUserState=createFeatureSelector<UserState>('user');

export const  UserCollection = UserAdapter.getSelectors(getUserState);

export const getEntities=createSelector(UserCollection.selectEntities,(entities)=>{
      return entities;
});

export const getIds=createSelector(UserCollection.selectIds,(ids)=>{
    return ids;
});

export const selectAll=createSelector(UserCollection.selectAll,(selectAll)=>{
    return [...userFirstState.entities,...selectAll];
});

export const selectTotal=createSelector(UserCollection.selectTotal,(total)=>{
    return total;
});