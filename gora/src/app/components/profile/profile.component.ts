import { Component, OnInit } from '@angular/core';
import { Interest } from 'src/app/interfaces/interest';

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
      id:3,
      name:'Радио'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
