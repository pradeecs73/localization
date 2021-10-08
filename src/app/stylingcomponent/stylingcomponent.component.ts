import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylingcomponent',
  templateUrl: './stylingcomponent.component.html',
  styleUrls: ['./stylingcomponent.component.css']
})
export class StylingcomponentComponent implements OnInit {

  constructor() { }

  firstclass="one";
  secondclass="two";
  classBoolean=true;
  styleBoolean=true;

  imageBoolean=true;

  ngOnInit(): void {
  }

}
