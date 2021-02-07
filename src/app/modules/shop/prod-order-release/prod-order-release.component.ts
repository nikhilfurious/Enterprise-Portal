import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-order-release',
  templateUrl: './prod-order-release.component.html',
  styleUrls: ['./prod-order-release.component.scss']
})
export class ProdOrderReleaseComponent implements OnInit {
 public products: any;
 public prodorder_release: any;
 isDisabled = true;
  filterorder: any;
  btn_text = "Edit";
  AUFNR: any;
  BESKZ: any;
  CHARG: any;
  DGLTS: any;
  DWERK: any;
  ETRMP: any;
  KDAUF: any;
  KDPOS: any;
  LGORT: any;
  MATNR: any;
  PAMNG: any;
  PLNUM: any;
  PSAMG: any;
  PSMNG: any;
  PWERK: any;
  STRMP: any;
  WEMNG: any;

  release_number1:any;
  release_number2:any;
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
        debugger;
        this.prodorder_release = this.products.ITAB_R.item;
        debugger;
        console.log(this.prodorder_release);
          // for(let i=0;i<this.prodorder_release.length;i++){
          //   if(i===0){
          //     debugger;
          //     this.release_number1 = this.prodorder_release[i].KDAUF;
          //   }
          //   else if(i===this.prodorder_release.length){
          //     debugger;
          //     this.release_number2 = this.prodorder_release[i].KDAUF;
          //   }
          //   else{
          //     return 0;
        //  }
          //}
       //
        })
    
  }

  retrieveRow(i){
    this.filterorder = this.prodorder_release[i];
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
    this.isDisabled=false;
    this.btn_text="Save";
  }
  else{
    this.isDisabled=true
    this.btn_text="Edit";

    const url = `api/shop_prde`;
    const  postData1 = 
    {
"AUFNR": this.AUFNR,
"BESKZ": this.BESKZ,
"CHARG": this.CHARG,
"DFREI": "1",
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
// handleOk(){
//   alert('Updated Successfully');
//   this.getData();
// }
}