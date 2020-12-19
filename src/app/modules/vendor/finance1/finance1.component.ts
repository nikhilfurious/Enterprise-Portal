import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'http.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-finance1',
  templateUrl: './finance1.component.html',
  styleUrls: ['./finance1.component.scss']
})
export class Finance1Component implements OnInit {

  

  httpClient: any;
  
  products: any;
  invoice: any;
  invoiceoriginal: any;
  filterorder: any;
  goodsoriginal: any;
  individualitem: any[];
  isShown: boolean;
  
 
  constructor(private http: HttpClient, public service:HttpService,public dialog: MatDialog) {
    this.getData();
  }
  ngOnInit(): void {
  }
  getData() {
    const  postData1 = {
        // 'CUSTOMERID': this.service.responseCustId
        "VENDORID":'SA100200'
       };
    const url = `api/vendor_invoice_nks`;

    this.http.post(url, postData1).subscribe(data => {
      this.products = data;
     this.invoice = this.products;
      console.log(this.invoice);
      this.invoiceoriginal = this.invoice;
      console.log(this.invoiceoriginal);
      console.log(this.removeDuplicates(this.invoiceoriginal.item, "BELNR"));
      this.invoice = this.removeDuplicates(this.invoiceoriginal.item, "BELNR");
       console.log(this.invoice);
      
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
  
    this.filterorder = this.invoiceoriginal.item.filter(j => j.BELNR == this.invoiceoriginal.item[i].BELNR);
    console.log(this.filterorder);
    this.individualitem=[];
    }
    retrivewindividualitem(i) {
    this.isShown = ! this.isShown;
    this.individualitem = this.filterorder[i];
    }
    }


