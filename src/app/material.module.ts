import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatSidenavModule, MatToolbarModule,
         MatCheckboxModule, MatFormFieldModule,
         MatInputModule, MatCardModule,
         MatButtonModule, MatGridListModule, 
        } from '@angular/material';  
import {MatBadgeModule} from '@angular/material/badge';         

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule, 
    MatToolbarModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule ,
    MatGridListModule,
    MatBadgeModule
  ],
  exports: [ MatSidenavModule, MatToolbarModule,
             MatCheckboxModule, MatFormFieldModule,
             MatInputModule, MatCardModule, MatButtonModule,
             MatGridListModule, MatBadgeModule
           ]
})
export class AppMaterialModule {};
