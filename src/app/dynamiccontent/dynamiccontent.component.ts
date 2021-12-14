import { Component, OnInit, ComponentFactoryResolver ,ViewChild, ElementRef } from '@angular/core';
import { DynamiccomponentComponent } from './../dynamiccomponent/dynamiccomponent.component';
import { PlaceHolder } from './../directives/placeholder.directive';
import {configservice} from './../service/config.service';

@Component({
  selector: 'app-dynamiccontent',
  templateUrl: './dynamiccontent.component.html',
  styleUrls: ['./dynamiccontent.component.css']
})
export class DynamiccontentComponent implements OnInit {

  @ViewChild(PlaceHolder) placeholder: PlaceHolder;
  
  constructor(private ComponentFactoryResolver:ComponentFactoryResolver,private configservice: configservice)
  {

  }

  ngOnInit(): void {
  }

  loadDyanmicContent(){
     const dynamiccomp=this.ComponentFactoryResolver.resolveComponentFactory(DynamiccomponentComponent);
     this.placeholder.ViewContainerRef.clear();
     console.log(this.placeholder.ViewContainerRef.element.nativeElement.innerHTML );

     const componentref=this.placeholder.ViewContainerRef.createComponent(dynamiccomp);
           componentref.instance.inputmessage="message loaded dynamically";
           console.log(this.configservice);
           this.configservice.getDirectiveInstance(this.placeholder.ViewContainerRef.element.nativeElement);
  }

}
