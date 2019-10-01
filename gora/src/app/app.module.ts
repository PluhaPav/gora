import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FriendsComponent } from './components/friends/friends.component';
import { SectionsComponent } from './components/sections/sections.component';
import { FormsModule } from '@angular/forms';
import { AddInterestComponent } from './components/add-interest/add-interest.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ProfileComponent,
    FriendsComponent,
    SectionsComponent,
    AddInterestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
