import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance4',
  templateUrl: './finance4.component.html',
  styleUrls: ['./finance4.component.scss']
})
export class Finance4Component implements OnInit {

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
