import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-add-interest',
  templateUrl: './add-interest.component.html',
  styleUrls: ['./add-interest.component.scss']
})
export class AddInterestComponent implements OnInit {

  public interestAddName: string;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  clickAddInterest() {
    if (this.interestAddName.length > 0) {
      this.profileService.setInterest(this.interestAddName);
    }
  }

}
