import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>,private router: Router, private route: ActivatedRoute) {}

  addTutorial(name:any, url:any) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}) )
  }

  movetotutoriallist() {
    this.router.navigate(['/tutorials'], { relativeTo: this.route });
  }


  ngOnInit() {
  }

}
