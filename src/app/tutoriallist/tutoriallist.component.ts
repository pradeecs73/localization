import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import * as TutorialActions from './../actions/tutorial.actions';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-tutoriallist',
  templateUrl: './tutoriallist.component.html',
  styleUrls: ['./tutoriallist.component.css']
})
export class TutoriallistComponent implements OnInit {

   // Section 1
   tutorials: Observable<Tutorial[]>;

   // Section 2
   constructor(private store: Store<AppState>,private router: Router,private route: ActivatedRoute) { 
     this.tutorials = store.select('tutorial');
     this.route.data.subscribe((resolve:any) =>{
          console.log(resolve.resolvedata);
     });
   }

  ngOnInit(): void {
  }

  delTutorial(index:any) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }

}
