import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store,select } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import { getName,getUrl} from './../state/tutorial.selector';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // Section 1
  tutorials: Observable<Tutorial[]>;

  // Section 2
  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() {
    
       this.store.select(getName).subscribe((name:any)=>{
         console.log(name);
       });

       this.store.select(getUrl).subscribe((url:any)=>{
        console.log(url);
      });

      this.store.pipe(select(getName)).subscribe((name:any)=>{
        console.log(name);
      });

      this.store.pipe(select(getUrl)).subscribe((name:any)=>{
        console.log(name);
      });

  }

  delTutorial(index:any) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }
 
}
