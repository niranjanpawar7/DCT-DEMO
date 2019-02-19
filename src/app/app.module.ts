import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app/material.module'; 
import { AppBootstrapModule } from '../app/bootstrap.module'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 
import { TrainingComponent } from './training/training.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';  

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent, 
    TrainingComponent,
    MyStoryComponent,
    MyProfileComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
