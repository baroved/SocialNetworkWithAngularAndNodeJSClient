import { Injectable } from '@angular/core';
import { Post } from 'src/app/Models/Post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/Post/';
  }

  GetPosts(): Observable<any> {
    return this.http.get(`${this.url}GetPosts`);
  }

  GetPostsByPublisher(userName): Observable<any> {
    return this.http.get(`${this.url}GetPosts/${userName}`);
  }
}
