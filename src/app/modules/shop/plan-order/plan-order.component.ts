import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-order',
  templateUrl: './plan-order.component.html',
  styleUrls: ['./plan-order.component.scss']
})
export class PlanOrderComponent implements OnInit {

  planorder: any;
  products:any;
  filterorder: any;

  isDisabled=true
  btn_text = "Edit"
  PLNUM: any;
  KDAUF: any;
  KDPOS: any;
  MATNR: any;
  PLWRK: any;
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
  PWWRK: any;
  PWRK: any;
  PLNUM2: any;
  KDAUF2: any;
  KDPOS2: any;
  MATNR2: any;
  PLWRK2: any;
  PWWRK2: any;
  PAART2: any;
  BESKZ2: any;
  GSMNG2: any;
  AVMNG2: any;
  PSTTR2: any;
  PEDTR2: any;
  PERTR2: any;
  LGORT2: any;
  MEINS2: any;
  BERID2: any;

  constructor(private http: HttpClient) {
    this.getData();
    // this.sendData();
     this.createData();
   }
  

  ngOnInit(): void {
  }
  getData() {
    const  postData1 = { "PLANT":'PP02'  };
    const url = `api/shopnc_plan_display_nc`;
    this.http.post(url, postData1).subscribe(data => {
      this.products = data;
    
      this.planorder = this.products.ITAB.item;
      debugger;
      console.log(this.planorder);
     //this.notrel = this .products.IT_NTR;
     //
      })
  }
  retrieveRow(i){
    this.filterorder = this.planorder[i];
  debugger;
  console.log(this.filterorder);
  this.PLNUM = this.filterorder.PLNUM;
  this.KDAUF = this.filterorder.KDAUF;
  this.KDPOS = this.filterorder.KDPOS ;
 this.MATNR = this.filterorder.MATNR;

 this.PLWRK = this.filterorder.PLWRK;
  this.PWWRK = this.filterorder.PWWRK;
 this.PAART= this.filterorder.PAART;
 this.BESKZ= this.filterorder.BESKZ;
 this.GSMNG  = this.filterorder.GSMNG;
 
 this.AVMNG= this.filterorder.AVMNG;
 this.PSTTR= this.filterorder.PSTTR;
 this.PEDTR= this.filterorder.PEDTR;
 this.PERTR= this.filterorder.PERTR;

 this.LGORT= this.filterorder.LGORT;
 this.MEINS= this.filterorder.MEINS;
 this.BERID= this.filterorder.BERID;
 
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

    const url = `api/shop_plan_update_nc`;
    const  postData1 = {
       
// {
//   "PLNUM":"7700000001",
//   "KDAUF":"11000000001", 
//   "KDPOS":"1",
//   "MATNR":"matnr12",
//   "PLWRK":"PP01",
//   "PWWRK":"PP01",
//   "PAART":"10 " ,
//   "BESKZ":"X ",
//   "GSMNG":"34",
//   "AVMNG":"38" ,
//   "PSTTR":"2020-12-20",
//   "PEDTR":"2020-12-31",
//   "PERTR":"2020-12-18",
//   "LGORT":"SA07",
//   "MEINS":"AU",
//   "BERID":"001"
//   }


  "PLNUM":this.PLNUM,
  "KDAUF":this.KDAUF, 
  "KDPOS":this.KDPOS,
  "MATNR":this.MATNR,
  "PLWRK":this.PLWRK,
  "PWWRK":this.PWWRK,
  "PAART": this.PAART ,
  "BESKZ":this.BESKZ,
  "GSMNG":this.GSMNG,
  "AVMNG":this.AVMNG ,
  "PSTTR":this.PSTTR,
  "PEDTR":this.PEDTR,
  "PERTR":this.PERTR,
  "LGORT":this.LGORT,
  "MEINS":this.MEINS,
  "BERID":this.BERID
  
    }
   this.http.post(url, postData1).subscribe(data => {
     console.log(data);
   })
  }
}
createData(){
  const url = `api/shop_create_nc`;
  const  postData1 = {
     
// {
//   "PLNUM":"7700000001",
//   "KDAUF":"11000000001", 
//   "KDPOS":"1",
//   "MATNR":"matnr12",
//   "PLWRK":"PP01",
//   "PWWRK":"PP01",
//   "PAART":"10 " ,
//   "BESKZ":"X ",
//   "GSMNG":"34",
//   "AVMNG":"38" ,
//   "PSTTR":"2020-12-20",
//   "PEDTR":"2020-12-31",
//   "PERTR":"2020-12-18",
//   "LGORT":"SA07",
//   "MEINS":"AU",
//   "BERID":"001"
//   }


"PLNUM":this.PLNUM2,
"KDAUF":this.KDAUF2, 
"KDPOS":this.KDPOS2,
"MATNR":this.MATNR2,
"PLWRK":this.PLWRK2,
"PWWRK":this.PWWRK2,
"PAART": this.PAART2 ,
"BESKZ":this.BESKZ2,
"GSMNG":this.GSMNG2,
"AVMNG":this.AVMNG2 ,
"PSTTR":this.PSTTR2,
"PEDTR":this.PEDTR2,
"PERTR":this.PERTR2,
"LGORT":this.LGORT2,
"MEINS":this.MEINS2,
"BERID":this.BERID2

  }
 this.http.post(url, postData1).subscribe(data => {
   console.log(data);
 })
}

}

