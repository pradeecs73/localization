import { Component, OnInit,ViewChild,AfterViewInit,ElementRef } from '@angular/core';
import {of,from,merge} from 'rxjs';
import { filter, map,first,reduce,tap,debounceTime,distinctUntilChanged,min
,max,count,concat,toArray ,pluck,every,find ,retry,switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { fromEvent } from 'rxjs';
import { FormControl,FormBuilder,Validators, FormGroup, FormArray } from '@angular/forms';

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
          map(n =>{
           console.log("pradeep"); 
           return   n * n
          })
        );
        
        console.log(squareOdd);
        squareOdd.subscribe(x => console.log(x));

        const source = from([
          { name: 'Joe', age: 30 },
          { name: 'Sarah', age: 35 }
        ]);
        //grab names
        const example = source.pipe(pluck('name'));
        //output: "Joe", "Sarah"
        const subscribe = example.subscribe(val => console.log(val));


        map((x:any) => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

        first()(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

        let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        let case1 = test1.pipe(
          filter((x:any) => x % 2 === 0),
          reduce((acc:any, one:any) => acc + one, 0)
        )
        case1.subscribe((x:any) => console.log(x));

       //It is an observable same like source observable with a callback function
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

  opertors(){

    let all_nums = of(1, 6, 15, 10, 58, 20, 40);
    let final_val = all_nums.pipe(max());
    final_val.subscribe(x => console.log("The Max value is "+x));

    let final_val2 = of(1, 6, 15, 10, 58, 2, 40).pipe(min());
    final_val2.subscribe(x => console.log("The Min value is "+x)); 

    let all_numscount = of(1, 7, 5, 10, 10, 20);
    let final_valcount = all_numscount.pipe(count());
    final_valcount.subscribe(x => console.log("The count is "+x));

    let list1 = of(2, 3, 4, 5, 6);
    let list2 = of(4, 9, 16, 25, 36)
    let final_valconcat = list1.pipe(concat(list2));
    final_valconcat.subscribe(x => console.log(x));

    let list1merge = of(2, 3, 4, 5, 6);
    let list2merge = of(4, 9, 16, 25, 36)
    let final_valmerge = merge(list1merge, list2merge);
    final_valmerge.subscribe(x => console.log(x));

    let listtoarray = of(2, 3, 4, 5, 6);
    let final_valtoarray = listtoarray.pipe(toArray());
    final_valtoarray.subscribe(x => console.log(x));

    let list1every = of(1, 3, 4, 9, 10, 15);
    let final_valevery = list1every.pipe(every(x => x % 2 === 0),);
    final_valevery.subscribe(x => console.log(x));

    let list1find = of(24, 3, 4, 9, 10, 15);
    let final_valfind = list1find.pipe(find(x => x % 2 === 0),);
    final_valfind.subscribe(x => console.log(x));

    // Create an Observable out of a promise
    const data = ajax('https://jsonplaceholder.typicode.com/posts').pipe(retry(4));
    // Subscribe to begin listening for async result
    console.log(data);
    data.subscribe({
      next(responseData) { console.log(responseData.response.slice(0,5)); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });

    //In the case of switchMap operator, a project function is applied on each source value and the output of it is merged with the output Observable, and the value given is the most recent projected Observable.

    let text = of('Welcome To');
    let case1 = text.pipe(switchMap((value) => of(value + ' Tutorialspoint!')));
    case1.subscribe((value) => {console.log(value);});
    
  }

 

}
