import { Injectable } from '@angular/core';
import { FriendsList } from 'src/app/interfaces/friends-list';

@Injectable({
  providedIn: 'root'
})
export class FriendsListService {

  private friendsList: FriendsList[] = [
    {
      id: 1,
      img: '/assets/image/lev.jpg',
      name: 'Лапин Александр',
      city: 'Тольятти',
      online: 'Online',
      phone: '7-495-674-34-69',
      email: 'newbird26@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 2,
          name: 'Компьютер'
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 2,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 3,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 4,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: 'Online',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 5,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 6,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: 'Online',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 7,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 8,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 8,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 8,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 8,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 8,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 8,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 8,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 8,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 8,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 8,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 8,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 8,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    },
    {
      id: 8,
      img: '/assets/image/blackCat.jpg',
      name: 'Самсонов Сергей',
      online: '',
      city: 'Тольятти',
      phone: '7-495-693-15-94',
      email: 'newkoala48@example.com',
      interest: [
        {
          id: 1,
          name: "музыка"
        }, {
          id: 3,
          name: 'радио'
        }
      ]
    }
  ];

  constructor() { }

  get getFriendsList(): FriendsList[]{
    return this.friendsList;
  }

}
