import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalenderComponent } from './calender/calender.component';
import { TrainingComponent } from './training/training.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { MyProfileComponent } from './my-profile/my-profile.component'; 
import { TrainingDetailComponent } from './training-detail/training-detail.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component : DashboardComponent },
  { path: 'calender', component : CalenderComponent },
  { path: 'training', component : TrainingComponent },
  { path: 'mystory', component : MyStoryComponent },
  { path: 'myprofile', component : MyProfileComponent },
  { path: 'trainingdetail/:id', component : TrainingDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
