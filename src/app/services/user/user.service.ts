import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/User/';
  }

  Login(user: User): Observable<any> {
    return this.http.post<any>(`${this.url}Login`, user);
  }

  Register(newUser: User): Observable<any> {
    return this.http.post<any>(`${this.url}Register`, newUser);
  }

  GetUsersByFilter(UserName: string): Observable<any> {
    const newSearch = UserName.slice(1);
    return this.http.get<any>(`${this.url}GetUsersByFilter/${newSearch}`);
  }
}
