import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatBadgeModule, MatCardModule, 
        } from '@angular/material';           

@NgModule({
  imports: [
            CommonModule, MatBadgeModule
  ],
  exports: [ 
             MatCardModule, MatBadgeModule
  ]
})
export class AppMaterialModule {};
