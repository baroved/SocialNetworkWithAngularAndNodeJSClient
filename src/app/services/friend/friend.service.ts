import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FriendService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/Friend/';
  }

  GetFriendsById(userId): Observable<any> {
    return this.http.get(`${this.url}GetFriendsById/${userId}`);
  }

}

