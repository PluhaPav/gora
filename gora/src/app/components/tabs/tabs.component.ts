import { Component, OnInit } from '@angular/core';
import { MyTabsEvent } from 'src/app/interfaces/my-tabs-event';
import { TabsService } from 'src/app/service/tabs/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor(private tabService: TabsService) { }

  ngOnInit() {
  }

  public clickTab(event: MyTabsEvent) {
    let hasClassActive = event.target.classList.contains('tab--active');
    if (!hasClassActive) {
      let tabs = document.querySelectorAll('.tab');
      let dataLink = event.target.getAttribute('data-link');
      tabs.forEach(function (element) {
        element.classList.remove('tab--active');
      });
      event.target.classList.add('tab--active');
      this.tabService.setTabLink = dataLink;
    }
  }

}
