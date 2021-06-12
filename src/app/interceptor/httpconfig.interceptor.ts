import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { pipe,Observable} from 'rxjs';
import { map, catchError,tap} from 'rxjs/operators';

@Injectable()//{providedIn: 'root'}

export class InterceptService  implements HttpInterceptor {

	constructor() { }

	// intercept request and add token
  	intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

    	// modify request
	    request = request.clone({ headers: request.headers.set('Authorization', '12345') });
	    console.log(request.url);
		console.log(request.method);
	    return next.handle(request);
    };
  
 
}
