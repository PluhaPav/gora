import { Component, OnInit } from '@angular/core';
import { Interest } from 'src/app/interfaces/interest';
import { MyEvent } from 'src/app/interfaces/my-event';
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
    online: '',
    city: 'г. Нижние Шахты',
    phone: '+7 (440) 554-32-12',
    email: 'vitalya@gora.ru',
    interest: this.interests
  };
  private deleteId: number;
  public write: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  private deleteInterestArray(id: number): void {
    let indexDelet: number = this.interests.findIndex(
      itemInterest => itemInterest.id === id
    );
    this.interests.splice(indexDelet, 1);
    this.deleteId = null;
  }

  public clickDeleteInterest(event: MyEvent) {
    let dataLink = Number.parseInt(event.target.getAttribute('data-id'));
    this.deleteId = dataLink;
    if (this.deleteId !== null || this.deleteId !== undefined) {
      this.deleteInterestArray(this.deleteId);
    }
  }

  public clickWrite(event: MyEvent): void {
    let hasClass = event.target.closest('.changed');
    if (hasClass !== null) {
      this.write = true;
    } else {
      this.write = false;
    }
  }
}
