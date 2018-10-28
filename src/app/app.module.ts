import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import{FormsModule} from "@angular/forms";
import{RouterModule,Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactComponent } from './contact/contact.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotosComponent,
    ContactComponent,
    RoomsComponent,
    FacilitiesComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"home",component:HomeComponent,pathMatch:"full"},
      {path:"",redirectTo:"home",pathMatch:"full"},
      {path:"photos",component:PhotosComponent},
      {path:"contact",component:ContactComponent},
      {path:"rooms",component:RoomsComponent},
      {path:"facilities",component:FacilitiesComponent},
      {path:"about",component:AboutComponent},
      {path:"*",component:HomeComponent},
      {path:"**",component:HomeComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
