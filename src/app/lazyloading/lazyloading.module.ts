import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LazyloadingComponent } from './../lazyloading/lazyloading.component';
import {SharedModule} from './../sharedmodule/sharedmodule'


const formRoutes: Routes = [
  { path: '', component: LazyloadingComponent }
];


@NgModule({
  declarations: [LazyloadingComponent],
  imports: [CommonModule, FormsModule,RouterModule.forChild(formRoutes),SharedModule],
  exports: [RouterModule]
})
export class LazyloadingModule {}