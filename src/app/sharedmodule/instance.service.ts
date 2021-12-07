import { Injectable } from '@angular/core';


@Injectable()
export class instanceservice {
   logmessage:any;

   writeMessage(message:any){
      console.log(message);
      console.log(this.logmessage);
      this.logmessage=message;
   }
}
