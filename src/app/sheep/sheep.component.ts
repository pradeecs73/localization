import { AnimationStyleMetadata } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheep',
  templateUrl: './sheep.component.html',
  styleUrls: ['./sheep.component.css']
})
export class SheepComponent implements OnInit {
  name:any="pradeep";
  constructor() { }

  ngOnInit(): void {
  }

}
