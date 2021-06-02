import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,Validators, FormGroup, FormArray } from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';
import { forbiddenNameValidator } from '../shared/user-name.validator';


@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  get userName(){
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }
  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''))
  }

  /* when you are defining the control for each form field seperately like commented code
  you can achieve the same formBuilder. internally formbuilder coverts the group to each form control instances
  formBuilder contains group of form controllers
  */

  ngOnInit() {
    this.registrationForm = this.fb.group( {
      userName: ['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)/*forbiddenNameValidator  */]],
      email:['',[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      subscribe:[false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, {validator: PasswordValidator});

    /*  registrationForm = new FormGroup({
   userName: new FormControl('Dileep'),
   password: new FormControl(''),
   confirmPassword: new FormControl(''),
   address: new FormGroup({
    city: new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl('')
   }),
 }); */

/*
The below code is used for cross field validation and important things to remember is
we need to subscribe first on "value changes " then set validators clear validator
finally updateValueAndvalidity
*/
    this.registrationForm.get('subscribe').valueChanges
    .subscribe(checkedValue => {
      const email = this.registrationForm.get('email');
      if(checkedValue) {
        email.setValidators(Validators.required);
      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity(); // to ensure correct status is reflected
    })
  }


 /* LoadApiData method loads the data to the form form the backend Api
 basically, format should be of type registrationModel type.
 Important: if you want set entire form data then you must use setValue and if you want update
 form partially you should go for pacthvalue
  */

 loadApiData() {
  /*  this.registrationForm.setValue( {
      userName: 'Anshul',
      password: 'Test',
      confirmPassword: 'Test',
      address: {
        city: 'Bangalore',
        state: 'Karnataka',
        postalCode: '560056'
      }
   }) */
   this.registrationForm.patchValue({
      userName: 'Anshul',
      password: 'test',
      confirmPassword: 'test'
   })
 }

 onSubmit() {
  console.log(this.registrationForm.value);
 }
}

