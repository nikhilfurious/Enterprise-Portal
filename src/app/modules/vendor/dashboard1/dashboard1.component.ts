import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'http.service';
import {MatDialog} from '@angular/material/dialog';
// import { DialogOverviewExampleDialog } from '../../customer/dashboard2/dashboard2.component';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {


  public QUOATATIONDETAILS: any = [];
  public HEADERDATA: any = [];
  httpClient: any;
  salesorder: any;
  salesorderorginal:any;
  products: any;
  filterorder: any;
  individualitem: any=0;
  individualitem1: any=0;
  individualitem2: any=0;
  itemno: any;
  isShown: boolean = false ;
  
 
  constructor(private http: HttpClient, public service:HttpService,public dialog: MatDialog) {
    this.getData();
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {  
  //   });
  // }
 
  getData() {
    const  postData1 = {
        // 'CUSTOMERID': this.service.responseCustId
        "VENDORID":'SA100200'
       };
    const url = `api/vendor_quot_nc`;

    this.http.post(url, postData1).subscribe(data => {
      //this.http.get("data/quot.json").subscribe(data => {
    
      this.products = data;
      this.salesorder = this.products.ITAB_QUOT;
      console.log(this.salesorder);
    
      this.salesorderorginal=this.salesorder;
      console.log(this.salesorder);
      console.log(this.removeDuplicates(this.salesorder.item, "EBELN"));
     this.salesorder = this.removeDuplicates(this.salesorderorginal.item, "EBELN");
     console.log(this.salesorder);
      })
  }
    removeDuplicates(array, key) {
      let lookup = {};
      let result = [];
      for (let i = 0; i < array.length; i++) {
        if (!lookup[array[i][key]]) {
          lookup[array[i][key]] = true;
          result.push(array[i]);
        }
      }
      return result;
    }

retrieveRow(i) {
  this.filterorder = this.salesorderorginal.item.filter(j => j.EBELN == this.salesorder[i].EBELN);
  console.log(this.filterorder);
  this.individualitem=[];
}
retrivewindividualitem(i) {
this.isShown = ! this.isShown;
this.individualitem = this.filterorder[i];
}


ngOnInit(): void {
}


}


