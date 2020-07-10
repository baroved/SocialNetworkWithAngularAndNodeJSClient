import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { Subject, Observable } from 'rxjs';
import { FilterPostsService } from '../services/filtersPosts/filter-posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public Posts: any = [];
  postComment: any;
  postLikeObservable: Observable<any>;
  postLike: any;
  postCommentObservable: Observable<any>;

  constructor(private postService: PostService) {
    this.postCommentObservable = new Observable(subscriber => {
      subscriber.next(this.postComment);
    });
    this.postLikeObservable = new Observable(subscriber => {
      subscriber.next(this.postLike);
    });
  }

  ngOnInit() {
    this.GetPosts();
  }


  onPostLikeSelect(event: any, p: any) {
    this.postLike = p.Id[0];
  }

  GetPosts() {
    this.postService.GetPosts().subscribe(res => {
      this.Posts = res.data;
    });
  }

  onPostCommentSelect(event: any, p: any) {
    this.postComment = p.Id[0];
  }

}
