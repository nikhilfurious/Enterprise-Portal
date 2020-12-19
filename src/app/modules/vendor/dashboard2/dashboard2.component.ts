import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'http.service';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})

  export class Dashboard2Component implements OnInit {


    public PURCHASEORDERDETAILS: any = [];
    public HEADERDATA: any = [];
    httpClient: any;
  purchaseorder: any;
  products: any;
  productsorderoriginal: any;
  filterorder: any;
  individualitem: any=0;
  isShown: boolean;
  products1: any;
    
    constructor(private http: HttpClient, public service:HttpService, public dialog:MatDialog) {
      this.getData();
    }
  
  
    ngOnInit(): void {
    }
   
   
    getData() {
      const  postData1 = {
          // 'CUSTOMERID': this.service.responseCustId
          "VENDORID":'SA100200'
         }
      const url = `api/vendor_po_nc`;
  
      this.http.post(url, postData1).subscribe(data => {
          this.products1 = data;
          this.purchaseorder = this.products1.ITAB_PUR;
          console.log(this.purchaseorder);
          this.productsorderoriginal = this.purchaseorder;
          console.log(this.purchaseorder);
      console.log(this.removeDuplicates(this.purchaseorder.item, "EBELN"));
     this.purchaseorder = this.removeDuplicates(this.purchaseorder.item, "EBELN");
     console.log(this.purchaseorder);

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
  itemDetail=[]
itemClick;
retrieveRow(i) {
  this.filterorder = this.productsorderoriginal.item.filter(j => j.EBELN == this.purchaseorder[i].EBELN);
  console.log(this.filterorder);
  this.individualitem=[];
}
retrivewindividualitem(i) {
this.isShown = ! this.isShown;
this.individualitem = this.filterorder[i];
}
  }
