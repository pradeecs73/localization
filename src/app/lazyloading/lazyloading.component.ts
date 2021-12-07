import { Component, OnInit } from '@angular/core';
import {instanceservice} from './../sharedmodule/instance.service';

@Component({
  selector: 'app-lazyloading',
  templateUrl: './lazyloading.component.html',
  styleUrls: ['./lazyloading.component.css']
})
export class LazyloadingComponent implements OnInit {

  constructor(private instanceservice: instanceservice) { }

  ngOnInit(): void {
    this.instanceservice.writeMessage("message from lazyloading component");
  }

}
