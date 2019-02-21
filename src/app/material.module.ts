import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatBadgeModule, MatCardModule, MatProgressBarModule
        } from '@angular/material';           

@NgModule({
  imports: [
            CommonModule, MatBadgeModule, MatProgressBarModule
  ],
  exports: [ 
             MatCardModule, MatBadgeModule, MatProgressBarModule
  ]
})
export class AppMaterialModule {};
