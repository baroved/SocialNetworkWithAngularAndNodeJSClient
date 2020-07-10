import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/Models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/Comment/';
  }

  GetCommends(postId): Observable<any> {
    return this.http.get(`${this.url}GetComments/${postId}`);
  }

  AddCommend(comment: Comment): Observable<any> {
    return this.http.post(`${this.url}AddComment`, comment);
  }
}
