import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  ischecked=true;
  myvalue="pradeep"
  colors=[{id:1,color:"red"},{id:2,color:"green"}];
  color=2;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  checkboxChange(event,checkbox:HTMLInputElement){
    console.log(this.ischecked);
    console.log(checkbox.value);
  }

}
