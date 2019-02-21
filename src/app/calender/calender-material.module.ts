import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {MatTabsModule, MatCardModule} from '@angular/material';
  
 

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule
   
  ],
  exports: [  
    MatTabsModule,
    MatCardModule
  ]
})
export class CalenderMaterialModule {};
