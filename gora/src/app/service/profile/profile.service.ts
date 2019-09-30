import { Injectable } from '@angular/core';
import { Interest } from 'src/app/interfaces/interest';
import { FriendsList } from 'src/app/interfaces/friends-list';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private interests: Interest[] = [
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

  private profile: FriendsList = {
    id: 1,
    img: '/assets/image/gora.jpg',
    name: 'Виталя Гора',
    online: '',
    city: 'г. Нижние Шахты',
    phone: '+7 (440) 554-32-12',
    email: 'vitalya@gora.ru',
    interest: this.interests
  };

  constructor() { }

  get getProfile(): FriendsList {
    let localProfile: FriendsList | null = JSON.parse(window.localStorage.getItem('profile'));
    if (localProfile !== null) {
      return localProfile;
    } else {

      return this.profile;
    }
  }

  get getInteresArray(): Interest[] {
    return this.interests;
  }

  setProfile(profileObject: FriendsList): void {
    window.localStorage.setItem('profile', JSON.stringify(profileObject));
  }
}
