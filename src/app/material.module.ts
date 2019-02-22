import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatBadgeModule, MatCardModule,
  MatStepperModule, MatTableModule,
  MatInputModule, MatSelectModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatBadgeModule, MatStepperModule, MatTableModule , MatInputModule, MatSelectModule, MatButtonModule
  ],
  exports: [
    MatCardModule, MatBadgeModule, MatStepperModule, MatTableModule, MatInputModule, MatSelectModule, MatButtonModule
  ]
})
export class AppMaterialModule { };
