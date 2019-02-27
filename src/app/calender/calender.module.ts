import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; 
import { RouterModule, Routes } from "@angular/router";
import { CalenderMaterialModule } from './calender-material.module';
import { calenderRoutingModule } from './routing-calender.module';  
import { CalenderComponent, DialogContentExampleDialog } from './calender.component';

//import { EventDetailComponent } from '../event-detail/event-detail.component';
//import { ExpensesComponent } from '../expenses/expenses.component';
 
 

@NgModule({
  imports: [
      CommonModule,
      RouterModule, 
      calenderRoutingModule,
      CalenderMaterialModule 
    ],
  declarations: [
    CalenderComponent,
    DialogContentExampleDialog
    //ExpensesComponent, 
  ],
  entryComponents: [DialogContentExampleDialog]
})

export class CalenderModule {}