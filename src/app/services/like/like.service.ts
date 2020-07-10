import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/Like/';
  }

  GetLikes(postId): Observable<any> {
    return this.http.get(`${this.url}GetLikes/${postId}`);
  }

  AddLike(newLike): Observable<any> {
    return this.http.post(`${this.url}AddLike`, newLike);
  }


  CheckLikeExists(newLike): Observable<any> {
    return this.http.post(`${this.url}CheckLikeExists`, newLike);
  }
}
