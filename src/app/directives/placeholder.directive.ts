import { Directive, ElementRef,ViewContainerRef} from '@angular/core';

@Directive({
   selector: '[placHolderDirective]'
})
export class PlaceHolder {

   constructor(Element: ElementRef,public ViewContainerRef:ViewContainerRef) {
   
   }

   
}