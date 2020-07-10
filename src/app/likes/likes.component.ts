import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { LikeService } from '../services/like/like.service';
import { Like } from '../Models/Like';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() postId: any;
  @Output() onCountLikes;
  likes: any = [];
  newLike: Like;
  res: any;

  constructor(private likesService: LikeService) {
    this.onCountLikes = new EventEmitter();
    this.newLike = new Like();
  }

  init() {
    this.GetLikes(() => {
      this.res = this.likes.find(like => like.UserId === 1021);
    });
  }


  ngOnInit() {
    this.init();
  }

  GetCountLikes() {
    this.onCountLikes.emit(this.likes.length);
  }

  GetLikes(callback) {
    this.likesService.GetLikes(this.postId).subscribe(res => {
      this.likes = res.data;
      this.GetCountLikes();
      callback();
    });
  }


  AddLike() {
    this.newLike.PostId = this.postId;
    this.newLike.UserId = 1021;
    this.likesService.AddLike(this.newLike).subscribe(res => {
      this.init();
    });
  }
}
