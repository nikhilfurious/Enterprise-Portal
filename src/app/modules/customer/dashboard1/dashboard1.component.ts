import { Component, OnInit } from '@angular/core';
import {tabledata1} from '../classes/tabledata1'
// import { HttpService } from '../http.service';
@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  // constructor(public service:HttpService) { }
  tabledata:tabledata1[];
  ngOnInit(): void {
    // this.service.getData()
    // .subscribe(data=>{this.tabledata=data});
    // console.log(this.tabledata)
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
