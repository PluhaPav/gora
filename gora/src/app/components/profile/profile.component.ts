import { Component, OnInit, DoCheck } from '@angular/core';
import { Interest } from 'src/app/interfaces/interest';
import { MyEvent } from 'src/app/interfaces/my-event';
import { FriendsList } from 'src/app/interfaces/friends-list';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, DoCheck {

  public interests: Interest[];
  public profile: FriendsList;
  private deleteId: number;
  public write: boolean = false;
  public visibleAddInterface: boolean = false;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profile = this.profileService.getProfile;
    this.interests = this.profile.interest;
  }

  private deleteInterestArray(id: number): void {
    let indexDelet: number = this.interests.findIndex(
      itemInterest => itemInterest.id === id
    );
    this.interests.splice(indexDelet, 1);
    this.deleteId = null;
  }

  public clickDeleteInterest(event: MyEvent) {
    let hasClass = event.target.classList.contains('interest__block');
    if (hasClass) {
      let dataLink = Number.parseInt(event.target.getAttribute('data-id'));
      this.deleteId = dataLink;
      if (this.deleteId !== null || this.deleteId !== undefined) {
        this.deleteInterestArray(this.deleteId);
      }
    }
  }

  public clickWrite(event: MyEvent): void {
    let hasClass = event.target.closest('.changed');
    if (hasClass !== null) {
      this.write = true;
    } else {
      this.write = false;
      this.profileService.setProfile(this.profile);
    }
  }

  clickAddInterest() {
    this.visibleAddInterface = !this.visibleAddInterface;
  }

  ngDoCheck(): void {
    this.profile = this.profileService.getProfile;
    this.interests = this.profile.interest;
  }
}
