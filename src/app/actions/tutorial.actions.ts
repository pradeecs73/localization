// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'

// Section 2
export const ADD_TUTORIAL       = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'
export const LOAD_TUTORIAL    = '[TUTORIAL] Load'
export const LOAD_TUTORIAL_From_Effects    = '[TUTORIAL] LoadFromEffect'

// Section 3
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

export class LoadTutorial implements Action {
    readonly type = LOAD_TUTORIAL

}

export class LoadTutorialFromEffects implements Action {
    readonly type = LOAD_TUTORIAL_From_Effects

    constructor(public payload: Tutorial[]) {}

}

// Section 4
export type Actions = AddTutorial | RemoveTutorial | LoadTutorial | LoadTutorialFromEffects