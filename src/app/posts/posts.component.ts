import { Component, OnInit } from '@angular/core';
import { configservice } from './../service/config.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any=[];

  constructor(private configservice: configservice){

  }

  ngOnInit(): void {

    this.configservice.getallposts().subscribe(
      (posts: any) => {
        this.posts=posts;
      },
      error => {
        console.log(error);
      }
    );

  }

}
