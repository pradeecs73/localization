import { Component, OnInit,ViewChild,AfterViewInit,ElementRef } from '@angular/core';
import { of,from  } from 'rxjs';
import { filter, map,first,reduce,tap,debounceTime,distinctUntilChanged} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-observablemethods',
  templateUrl: './observablemethods.component.html',
  styleUrls: ['./observablemethods.component.css']
})
export class ObservablemethodsComponent implements OnInit,AfterViewInit {

  @ViewChild('myinput') myinput:ElementRef;
  constructor() { }

  ngOnInit(): void {

     const squareOdd = of(1, 2, 3, 4, 5)
        .pipe(
          filter(n => n % 2 !== 0),
          map(n => n * n)
        );

        squareOdd.subscribe(x => console.log(x));

        map((x:any) => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

        first()(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

        let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        let case1 = test1.pipe(
          filter((x:any) => x % 2 === 0),
          reduce((acc:any, one:any) => acc + one, 0)
        )
        case1.subscribe((x:any) => console.log(x));

        let list1 = of(1, 2, 3, 4, 5, 6);  
        let final_val = list1.pipe(  
          tap(x => console.log("From tap() =" + x),  
              e => console.log(e),  
              () => console.log("Task completed")),  
          filter(a => a % 2 === 0)
        );  
        final_val.subscribe(x => console.log("The even number is=" + x));  
  }

  ngAfterViewInit(){
    
        const searchterm=fromEvent(this.myinput.nativeElement,'keyup').pipe(
              map((event:any)=>event.target.value),
              debounceTime(1000),
              distinctUntilChanged()

        );

        searchterm.subscribe((response:any)=>{
              console.log(response);
        });

  }

  fetchData(){

    // Create an Observable out of a promise
    const data = ajax('https://jsonplaceholder.typicode.com/posts');
    // Subscribe to begin listening for async result
    data.subscribe({
      next(responseData) { console.log(responseData.response.slice(0,5)); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });

  }

 

}
