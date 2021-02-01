import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prod-order-pending',
  templateUrl: './prod-order-pending.component.html',
  styleUrls: ['./prod-order-pending.component.scss']
})
export class ProdOrderPendingComponent implements OnInit {
  prodorder:any
  products: any;
  prodorderpending: any;
  release_order: any;
  filterorder: any;
  btn_text = "Edit";

  PLNUM: any;
  KDAUF: any;
  KDPOS: any;
  MATNR: any;
  PLWRK: any;
  PWWRK: any;
  PAART: any;
  BESKZ: any;
  GSMNG: any;
  AVMNG: any;
  PSTTR: any;
  PEDTR: any;
  PERTR: any;
  LGORT: any;
  MEINS: any;
  BERID: any;
  isDisabled = true;
  
  AUFNR: any;
  CHARG: any;
  DGLTS: any;
  DWERK: any;
  ETRMP: any;
  PAMNG: any;
  PSAMG: any;
  PSMNG: any;
  PWERK: any;
  STRMP: any;
  WEMNG: any;
  constructor(private http: HttpClient) { 
    this.getData();
  }

  ngOnInit(): void {
  }
 
    getData() {
    
      const  postData1 = { "PLANT":'PP02'  };
      const url = `api/shop_prdd`;
      this.http.post(url, postData1).subscribe(data => {
        this.products = data;
      
        this.prodorderpending = this.products.ITAB_P.item;
        debugger;
        console.log(this.prodorderpending);

       //
        })
    
  }
  release(i){
  this.release_order = this.prodorderpending[i].AUFNR;
  debugger;
  console.log(this.release_order);
  const  postData1 = { "ORDER": this.release_order};
      const url = `api/shop_ordr`;
      this.http.post(url, postData1).subscribe(data => {
        this.products = data;
        debugger;
        console.log(this.products);
        alert(this.release_order + 'has been released successfully');
       //
        })
  }

  retrieveRow(i){
    this.filterorder = this.prodorderpending[i];
  debugger;
  console.log(this.filterorder);
  this.AUFNR = this.filterorder.AUFNR;
  this.BESKZ = this.filterorder.BESKZ;
  this.CHARG = this.filterorder.CHARG;
  this.DGLTS = this.filterorder.DGLTS;
  this.DWERK = this.filterorder.DWERK;

  this.ETRMP = this.filterorder.ETRMP;
  this.KDAUF = this.filterorder.KDAUF;
  this.KDPOS = this.filterorder.KDPOS;
  this.LGORT = this.filterorder.LGORT;
  this.MATNR = this.filterorder.MATNR;

  this.PAMNG = this.filterorder.PAMNG;
  this.PLNUM = this.filterorder.PLNUM;
  this.PSAMG = this.filterorder.PSAMG;
  this.PSMNG = this.filterorder.PSMNG;
  this.PWERK = this.filterorder.PWERK;

  this.STRMP = this.filterorder.STRMP;
  this.WEMNG = this.filterorder.WEMNG;

 


 
}

enableEdit(){
  if(this.isDisabled == true)
  {
    this.isDisabled=false
    this.btn_text="Save";
  }
  else{
    this.isDisabled=true
    this.btn_text="Edit"

    const url = `api/shop_prde`;
    const  postData1 = {


"AUFNR": this.AUFNR,
"BESKZ": this.BESKZ,
"CHARG": this.CHARG,
"DGLTS" : this.DGLTS,
"DWERK": this.DWERK,

"ETRMP": this.ETRMP,
"KDAUF": this.KDAUF,
"KDPOS": this.KDPOS,
"LGORT": this.LGORT,
"MATNR": this.MATNR,

"PAMNG": this.PAMNG,
"PLNUM": this.PLNUM,
"PSAMG": this.PSAMG,
"PSMNG": this.PSMNG,
"PWERK": this.PWERK,

"STRMP": this.STRMP,
"WEMNG": this.WEMNG,
  
    }
   this.http.post(url, postData1).subscribe(data => {
     console.log(data);
   })
  }
}
}
