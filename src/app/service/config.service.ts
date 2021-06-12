import { Injectable } from '@angular/core';
import { Router, ActivatedRoute,Resolve } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class configservice implements Resolve<any> {

  constructor(private HttpClient: HttpClient) {}
  
  resolve(){
      return "myresolveddatafromresolver";
  }

  getallposts() {
    return this.HttpClient.get('https://jsonplaceholder.typicode.com/posts');
  }


}
