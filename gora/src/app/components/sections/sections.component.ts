import { Component, OnInit, DoCheck } from '@angular/core';
import { TabsService } from 'src/app/service/tabs/tabs.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit, DoCheck {

  public tabLink: string;

  constructor(private tabService: TabsService) { }

  ngOnInit(): void {
    this.tabLink = this.tabService.getTabLink;
  }

  ngDoCheck(): void {
    this.tabLink = this.tabService.getTabLink;
  }

}
