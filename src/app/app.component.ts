import { Component, OnInit } from '@angular/core';
import { CowComponent } from './cow/cow.component';
import { SheepComponent } from './sheep/sheep.component';
import {instanceservice} from './sharedmodule/instance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'localise';
  myComponent:any=SheepComponent;

  constructor(private instanceservice: instanceservice){

  }

  ngOnInit(){
    this.instanceservice.writeMessage("message from app component");
  }


  changeDynamicComponentLoad(myComponent){
    if(myComponent == 'cow')
    {
      this.myComponent=CowComponent;
    }
    else{
      this.myComponent=SheepComponent;
    }
  }
}
