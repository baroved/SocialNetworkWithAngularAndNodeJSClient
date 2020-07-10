import { Component, OnInit } from '@angular/core';
import { FriendService } from '../services/friend/friend.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: any = [];
  constructor(private friendService: FriendService) {}

  ngOnInit() {
    this.friendService.GetFriendsById('1021').subscribe(res => {
      this.friends = res;
      debugger;
    });
  }

}
