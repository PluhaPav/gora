import { Component, OnInit } from '@angular/core';
import { Interest } from 'src/app/interfaces/interest';
import { MyTabsEvent } from 'src/app/interfaces/my-tabs-event';
import { FriendsList } from 'src/app/interfaces/friends-list';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public interests: Interest[] = [
    {
      id: 1,
      name: 'Музыка'
    },
    {
      id: 2,
      name: 'Компьютеры'
    },
    {
      id: 3,
      name: 'Радио'
    }
  ];

  public profile: FriendsList = {
    id: 1,
    img: '/assets/image/gora.jpg',
    name: 'Виталя Гора',
    city: 'г. Нижние Шахты',
    phone: '+7 (440) 554-32-12',
    email: 'vitalya@gora.ru',
    interest: this.interests
  };

  public write: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public deleteInterest(id: number): void {
    let indexDelet: number = this.interests.findIndex(
      itemInterest => itemInterest.id === id
    );
    this.interests.splice(indexDelet, 1);
  }

  public clickInterest(event: MyTabsEvent) {
    let dataLink = event.target.getAttribute('data-link');
  }

}
