import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'http.service';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.scss']
})
export class Dashboard3Component implements OnInit {



 
  httpClient: any;
  GOODSDETAILS: Object;
  products: any;
  goods: any;
  products_goods: any;
  goodsoriginal: any;
  filterorder: any;
  goodsorderoriginal: any;
  purchaseorder: any;
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
    const url = `api/vendor_goods_nc`;

    this.http.post(url, postData1).subscribe(data => {
        this.products_goods= data;
        this.goods = this.products_goods.IT_GOODS;
        console.log(this.goods);
      
this.goodsoriginal = this.goods;
console.log(this.goodsorderoriginal);
console.log(this.removeDuplicates(this.goodsoriginal.item, "MBLNR"));
this.goods = this.removeDuplicates(this.goodsoriginal.item, "MBLNR");
console.log(this.goods);

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
  debugger;
this.filterorder = this.goodsoriginal.item.filter(j => j.MBLNR == this.goodsoriginal.item[i].MBLNR);
console.log(this.filterorder);
this.individualitem=[];
}
retrivewindividualitem(i) {
this.isShown = ! this.isShown;
this.individualitem = this.filterorder[i];
}
}
