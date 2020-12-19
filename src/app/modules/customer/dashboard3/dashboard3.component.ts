import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.scss']
})
export class Dashboard3Component implements OnInit {

  constructor() { }

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
}
