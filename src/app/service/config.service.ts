import { Injectable ,ViewChild} from '@angular/core';
import { Router, ActivatedRoute,Resolve } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { PlaceHolder } from './../directives/placeholder.directive';

@Injectable()
export class configservice implements Resolve<any> {

 
   placeholder=PlaceHolder;
  constructor(private HttpClient: HttpClient) {}
  
  resolve(){
      return "myresolveddatafromresolver";
  }

  getallposts() {
    return this.HttpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  getDirectiveInstance(element:any) {
     console.log(this.placeholder);
     console.log(element);
  }


}
