import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {DialogOverviewExampleDialog} from '../modules/customer/dashboard2/dashboard2.component'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatDividerModule,
    MatDividerModule
    
  ],
  exports:[
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatDividerModule
  ],
  entryComponents:[DialogOverviewExampleDialog]
})
export class SharedModule { }
