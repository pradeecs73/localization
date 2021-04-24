import { AbstractControl, ValidatorFn } from "@angular/forms";

//export function forbiddenNameValidator(control: AbstractControl): {[key: string]:any} | null {
/* this function takes the parameter which is formControl and of type abstract */
/* this functions returns both success and error. so if its error it returns of type string if its of success then its a null */
// const forbidden = /admin/.test(control.value); // usee to check wheather control.value contains admin && test() default method
 //return forbidden? {'forbiddenName': {value:control.value}} : null;
//}


/*
 the drawback of the above function is ,it will accept only one parameter i.e formControl
 we cant pass second parameter
 solution: creata a factory fucntion that accepts a string parameter and return validatior fucntion itself
 below is the soultion
 */

 export function forbiddenNameValidator(forbiddenName : RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]:any} | null  =>{
    /* this function takes the parameter which is formControl and if type abstract */
    /* this functions returns both success and error. so if its error it of type string if its success the its a null */
     const forbidden = forbiddenName.test(control.value); // usee to check wheather control.value contains admin && test() default method
     return forbidden? {'forbiddenName': {value:control.value}} : null;
    }
 }
