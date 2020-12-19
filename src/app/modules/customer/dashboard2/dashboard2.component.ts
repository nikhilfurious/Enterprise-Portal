import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      
    });
  }

  ngOnInit(): void {
  }
  tableArray=[
    {col1:'1', col2:'Mahesh', col3:'Bangalore',col4:'High'},
    {col1:'2', col2:'Mahesh', col3:'Bangalore',col4:'High'},
    {col1:'3', col2:'Mahesh', col3:'Bangalore',col4:'High'},
    {col1:'4', col2:'Mahesh', col3:'Bangalore',col4:'High'},
    {col1:'5', col2:'Mahesh', col3:'Bangalore',col4:'High'},
    {col1:'6', col2:'Mahesh', col3:'Bangalore',col4:'High'},
    {col1:'7', col2:'Mahesh', col3:'Bangalore',col4:'High'},
    {col1:'8', col2:'Mahesh', col3:'Bangalore',col4:'High'},
    {col1:'9', col2:'Mahesh', col3:'Bangalore',col4:'High'},
    {col1:'10', col2:'Mahesh', col3:'Bangalore',col4:'High'},
    {col1:'11', col2:'Mahesh', col3:'Bangalore',col4:'High'},
  ]

  cust_id;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'popup.html',
})
export class DialogOverviewExampleDialog {

  constructor() {}
  customer_id = "45678"

}