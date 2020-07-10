import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentService } from '../services/comment/comment.service';
import { Subject } from 'rxjs';
import { Comment } from '../Models/Comment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() postId: any;
  @Output() OnComments;
  commends: any = [];
  newComment: Comment;
  commentForm: FormGroup;
  constructor(private commentService: CommentService, private fb: FormBuilder) {
    this.newComment = new Comment();
    this.OnComments = new EventEmitter();
    this.InitValidations();
  }

  GetCountComments() {
    this.OnComments.emit(this.commends.length);
  }

  ngOnInit() {
    this.GetComments();
  }

  InitValidations() {
    this.commentForm = this.fb.group({
      comment: ['', [Validators.required]]
    });
  }

  get Controllers() {
    return this.commentForm.controls;
  }

  GetComments() {
    this.commentService.GetCommends(this.postId).subscribe(res => {
      this.commends = res.data;
      this.GetCountComments();
    });
  }

  AddComment(text) {
    const date = new Date().toLocaleString();
    this.newComment.postId = this.postId;
    this.newComment.userId = 1024;
    this.newComment.text = text;
    this.newComment.date = date;
    this.commentService.AddCommend(this.newComment).subscribe(res => {
      this.newComment.text = '';
      this.GetComments();
    });
  }
}
