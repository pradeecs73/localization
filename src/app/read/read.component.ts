import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store,select } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import { getName,getUrl} from './../state/tutorial.selector';
import * as TutorialActions from './../actions/tutorial.actions';
import { User } from './../models/tutorial.model';
import {getEntities,getIds,selectAll,selectTotal} from './../reducers/user.reducer';
import * as UserActions from './../actions/user.actions'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // Section 1
  tutorials: Observable<Tutorial[]>;
  users: Observable<User[]>;

  // Section 2
  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() {
 
       this.store.select(getName,"gdfgdfg").subscribe((name:any)=>{
         console.log(name);
       });

       this.store.select(getUrl,[{"name":"pradeep","url":"sdfhhsdfh"}]).subscribe((url:any)=>{
        console.log(url);
      });

      this.store.pipe(select(getName,[{"name":"pradeep","url":"sdfhhsdfh"}])).subscribe((name:any)=>{
        console.log(name);
      });

      this.store.pipe(select(getUrl,[{"name":"pradeep","url":"sdfhhsdfh"}])).subscribe((name:any)=>{
        console.log(name);
      });

      this.store.select(getEntities).subscribe((entities:any)=>{
        console.log(entities);
      });

      this.store.select(getIds).subscribe((ids:any)=>{
        console.log(ids);
      });

      this.store.select(selectAll).subscribe((allentities:any)=>{
        console.log(allentities);
        this.users = allentities;
      });

      this.store.select(selectTotal).subscribe((total:any)=>{
        console.log(total);
      });


  }

  delTutorial(index:any) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }

  deleteUser(id:any)
  {
    this.store.dispatch(new UserActions.RemoveUser(id));
  }
 
}
