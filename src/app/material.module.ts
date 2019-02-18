import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatSidenavModule, MatToolbarModule,
         MatCheckboxModule, MatFormFieldModule,
         MatInputModule, MatCardModule,
         MatButtonModule 
        } from '@angular/material'; 
         
@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule, 
    MatToolbarModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule 
  ],
  exports: [ MatSidenavModule, MatToolbarModule,
             MatCheckboxModule, MatFormFieldModule,
             MatInputModule, MatCardModule, MatButtonModule
           ]
})
export class AppMaterialModule {};
