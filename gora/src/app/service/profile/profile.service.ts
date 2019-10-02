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
      this.interests = localProfile.interest;
      return localProfile;
    } else {
      return this.profile;
    }
  }

  get getInteresArray(): Interest[] {
    let localInterest: FriendsList | null = JSON.parse(window.localStorage.getItem('profile'));
    if (localInterest !== null) {
      return localInterest.interest;
    } else {
      return this.profile.interest;
    }
  }

  setProfile(profileObject: FriendsList): void {
    window.localStorage.setItem('profile', JSON.stringify(profileObject));
  }

  setInterest(interest: string): void {
    let localProfile: FriendsList = JSON.parse(window.localStorage.getItem('profile'));
    let countInterest: number = localProfile.interest.length;
    localProfile.interest.unshift(
      {
        id: (countInterest + 1),
        name: interest
      }
    );
    this.interests = localProfile.interest;
    window.localStorage.setItem('profile', JSON.stringify(localProfile));
  }
}
