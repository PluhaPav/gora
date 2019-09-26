import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FriendsComponent } from './components/friends/friends.component';
import { SectionsComponent } from './components/sections/sections.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ProfileComponent,
    FriendsComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
