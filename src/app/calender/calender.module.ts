import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; 
import { RouterModule, Routes } from "@angular/router";
import { CalenderMaterialModule } from './calender-material.module';
import { calenderRoutingModule } from './routing-calender.module';  
import { CalenderComponent } from './calender.component';
 

@NgModule({
  imports: [
      CommonModule,
      RouterModule, 
      calenderRoutingModule,
      CalenderMaterialModule 
    ],
  declarations: [
    CalenderComponent
  ]
})

export class CalenderModule {}