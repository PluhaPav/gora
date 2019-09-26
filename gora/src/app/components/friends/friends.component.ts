import { Component, OnInit } from '@angular/core';
import { FriendsListService } from 'src/app/service/friends/friends-list.service';
import { FriendsList } from 'src/app/interfaces/friends-list';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  public friendsArray: FriendsList[];

  constructor(private friendsList:FriendsListService) { }

  ngOnInit() {
    this.friendsArray = this.friendsList.getFriendsList;
  }

}
