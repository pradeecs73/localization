import { Component } from '@angular/core';
import { CowComponent } from './cow/cow.component';
import { SheepComponent } from './sheep/sheep.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localise';
  myComponent:any=SheepComponent;

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
