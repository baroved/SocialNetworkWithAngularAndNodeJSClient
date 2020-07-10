import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterPostsService {

  subject: Subject<any>;


  constructor() {
    this.subject = new Subject<any>();
  }


  getPostsByPublisher(res) {
    this.subject.next(res);
  }


}
