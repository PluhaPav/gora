import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  private tabLink: string = 'profile';

  constructor() { }

  get getTabLink(){
    return this.tabLink;
  }

  set setTabLink(tabLink:string){
    this.tabLink = tabLink;
  }

}
