import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {MatTabsModule,
  MatBadgeModule, MatCardModule,
  MatStepperModule, MatTableModule,
  MatInputModule, MatSelectModule,
  MatButtonModule, MatProgressBarModule
} from '@angular/material';
  
 

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatStepperModule,
    MatTableModule,
    MatBadgeModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressBarModule
   
  ],
  exports: [  
    MatTabsModule,
    MatCardModule,
    MatStepperModule,
    MatTableModule,
    MatBadgeModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class EventDetailMaterialModule {};
