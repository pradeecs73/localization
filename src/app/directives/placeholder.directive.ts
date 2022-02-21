import { Directive, ElementRef,ViewContainerRef,Host,HostListener} from '@angular/core';
import { AppComponent } from './../app.component';

@Directive({
   selector: '[placHolderDirective]'
})
export class PlaceHolder {
   constructor(Element: ElementRef,public ViewContainerRef:ViewContainerRef,
      private host:AppComponent) {
       console.log(host.title);
   }

   @HostListener('click',['$event.target']) 

   public onClick(target){
      alert("1");
   }
   
}