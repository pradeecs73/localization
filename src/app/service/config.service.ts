import { Injectable } from '@angular/core';
import { Router, ActivatedRoute,Resolve } from '@angular/router';

@Injectable()
export class configservice implements Resolve<any> {

  constructor() {}
  
  resolve(){
      return "myresolveddatafromresolver";
  }


}
