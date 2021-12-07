import { NgModule,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {instanceservice} from './instance.service';


@NgModule({
  imports: [CommonModule, FormsModule]
})
export class SharedModule {
     public static forRoot():ModuleWithProviders<any>{
          return {
            ngModule:SharedModule,
            providers:[instanceservice]
          }
     }
}