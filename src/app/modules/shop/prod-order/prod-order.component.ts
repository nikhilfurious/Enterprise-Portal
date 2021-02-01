import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-order',
  templateUrl: './prod-order.component.html',
  styleUrls: ['./prod-order.component.scss']
})
export class ProdOrderComponent implements OnInit {
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
  AUFNR: any;
  CHARG: any;
  DGLTS: any;
  DWERK: any;
  ETRMP: any;
  PAMNG: any;
  PSAMG: any;
  PSMNG: any;
  PWERK: any;
  WEMNG: any;
  STRMP: any;

  constructor(private http:HttpClient) { 
    this.createData();
  }

  ngOnInit(): void {
  }
  createData(){
      const url = `api/shop_prdc`;
      const  postData1 = 
      {
         
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
 "WEMNG": this.WEMNG
  
  
    
      }
     this.http.post(url, postData1).subscribe(data => {
       console.log(data);
     })
    }
  }


