import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'http.service';

@Component({
  selector: 'app-finance2',
  templateUrl: './finance2.component.html',
  styleUrls: ['./finance2.component.scss']
})
export class Finance2Component implements OnInit {

  httpClient: any;

  products:any;
  payment: any;
  invoiceoriginal: any;
  invoice: any;
  filterorder: any;
  individualitem: any[];
  isShown: boolean;
  paymentoriginal: any;

 
  constructor(private http: HttpClient, public service:HttpService,public dialog: MatDialog) {
    this.getData();
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewFinance, {  
  //   });
  // }

  ngOnInit(): void {
  }
 
 
  getData() {
    const  postData1 = {
        // 'CUSTOMERID': this.service.responseCustId
        "VENDORID":'SA100200'
       };
    const url = `api/ven_pay_od_nikhil`;

    this.http.post(url, postData1).subscribe(data => {
  
      this.products = data;
      this.payment=this.products.ITAB_PAY_OD;
       console.log(this.payment);
       this.paymentoriginal = this.payment;
      console.log(this.paymentoriginal);
      console.log(this.removeDuplicates(this.paymentoriginal.item,"BELNR"));
      this.payment= this.removeDuplicates(this.paymentoriginal.item,"BELNR");
       console.log(this.payment);
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
    debugger
    this.filterorder = this.paymentoriginal.item.filter(j => j.BELNR == this.paymentoriginal.item[i].BELNR);
    console.log(this.filterorder);
    this.individualitem=[];
    }
    retrivewindividualitem(i) {
    this.isShown = ! this.isShown;
    this.individualitem = this.filterorder[i];
    }
    }



      

       
//     })
// }
// itemDetail=[]
// itemClick;
// retrieveRow(i){
//   for(this.itemClick=0;this.itemClick<14;this.itemClick++){
//     console.log(this.itemDetail[i]);
//     this.itemDetail[this.itemClick]=false;
//   }
  
//   console.log(this.itemDetail[i]);
//   this.itemDetail[i]=true;
//   console.log(i)
//   console.log(this.HEADERDATA.item[i]);
//   this.service.VENDOR_PAYMENT_OVERDUE_CN=this.HEADERDATA.item[i].LIFNR;
//   this.service.VENDOR_PAYMENT_OVERDUE_PD=this.HEADERDATA.item[i].BUDAT;
//   this.service.VENDOR_PAYMENT_OVERDUE_ALC=this.HEADERDATA.item[i].DMBTR;
//   this.service.VENDOR_PAYMENT_OVERDUE_PDN=this.HEADERDATA.item[i].EBELN ;
//   this.service.VENDOR_PAYMENT_OVERDUE_BD=this.HEADERDATA.item[i].ZFBDT;
//   this.service.VENDOR_PAYMENT_OVERDUE_MYDOMAIN=this.HEADERDATA.item[i].ZTERM;
//   this.service.VENDOR_PAYMENT_OVERDUE_ST=this.HEADERDATA.item[i].TXZ01;
//   this.service.VENDOR_PAYMENT_OVERDUE_MN=this.HEADERDATA.item[i].MATNR;
//   this.service.VENDOR_PAYMENT_OVERDUE_CC=this.HEADERDATA.item[i].BUKRS;
//   this.service.VENDOR_PAYMENT_OVERDUE_NP=this.HEADERDATA.item[i].NETPR;
//   this.service.VENDOR_PAYMENT_OVERDUE_DOWNPAYMENT=this.HEADERDATA.item[i].DPAMT; 
//   this.service.VENDOR_PAYMENT_OVERDUE_DUEDATE=this.HEADERDATA.item[i].DPDAT;
//   this.service.VENDOR_PAYMENT_OVERDUE_MATYPE=this.HEADERDATA.item[i].MTART;
//   this.service.VENDOR_PAYMENT_OVERDUE_NET=this.HEADERDATA.item[i].NTGEW;
//   this.service.VENDOR_PAYMENT_OVERDUE_VOL=this.HEADERDATA.item[i].VOLUM;
 
 
 
 
 
 
 
  

//   this.openDialog();
// }

// }


// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'popup-finance2.html',
//   styleUrls: ['./finance2.component.scss']
// })
// export class DialogOverviewFinance {

//   constructor(public service:HttpService) {}


// }
