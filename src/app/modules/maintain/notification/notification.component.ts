import { HttpClient } from '@angular/common/http';
import { not, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'http.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  httpClient: any;
  salesorder: any;
  filterorder: any;
  products: any;
  notiforder: any;
  
  
  nid:any;
  ntype:any;
  ntitle:any;
  nperson:any;
  nstdat:any;
  nedat:any;
  nwo:any;
  ncc:any;
  nmsd:any;
  nen:any;
  nprior:any;


  notif = [{
    "QNUM":"120000000001",
    "QMTXT":"material detachment",
    "QMART":"B1",
    "QMDAT":"10.02.2020",
    "QMDAB":"12.02.2020",

    "AUFNR":"8400",
    "AUSNV":"08.02.2020",
    "SWERK":"SA07",
    "EQUNR":"1002",
    "PRIOR":"1",
  
    "QNAM":"ABAPER3",
    "OBJNR":"OR120000000001"
},
{
  "QNUM":"120000000002",
  "QMTXT":"material detachment",
  "QMART":"B1",
  "QMDAT":"10.02.2020",
  "QMDAB":"12.02.2020",
  "AUFNR":"8400",
  "SWERK":"SA07",
  "EQUNR":"1002",
  "PRIOR":"1",
  "AUSNV":"08.02.2020",
  "QNAM":"ABAPER3",
  "OBJNR":"OR120000000002"


},
{
    "QNUM":"120000000003",
    "QMTXT":"material detachment",
    "QMART":"B1",
    "QMDAT":"10.02.2020",

    "QMDAB":"12.02.2020",
    "AUFNR":"8400",
    "SWERK":"SA07",
    "EQUNR":"1002",
    
    "PRIOR":"1",
    "AUSNV":"08.02.2020",
    "QNAM":"ABAPER3",

    "OBJNR":"OR120000000003"
}];
  updateResponse: any;
  nid2: any;
  ntitle2: any;
  ntype2: any;
  nmsd2: any;
  nstdat2: any;
  nprior2: any;
  ncc2: any;
  nen2: any;
  nedat2: any;
  updateResponse2: Object;
  notif2: any;


  
  constructor(private http: HttpClient, public service:HttpService) {
   this.getData();
   this.sendData();
   this.createData();
  }
 

  ngOnInit(): void {
  }

  //retrieve data
  getData() {
    const  postData1 = { "PLANT":'SA07'  };
    const url = `api/maint_notd`;
    this.http.post(url, postData1).subscribe(data => {
      this.products = data;
    
      this.notiforder = this.products.ITAB.item;
      debugger;
      console.log(this.notiforder);
     //this.notrel = this .products.IT_NTR;
     //
      })
  }



  //retrivew single row
  retrieveRow(i){
      this.filterorder = this.notiforder[i];
    debugger;
    console.log(this.filterorder);
    this.nid = this.filterorder.QMNUM;
    this.ntitle = this.filterorder.QMTXT;
    this.ntype = this.filterorder.QMART;
   this.nstdat = this.filterorder.QMDAT;
   this.nedat = this.filterorder.QMDAB;
   this.nwo = this.filterorder.AUFNR;
   this.ncc = this.filterorder.SWERK;
   this.nmsd  = this.filterorder.AUSVN;
   this.nen = this.filterorder.EQUNR;
   this.nprior = this.filterorder.PRIOK;
   
  }


  sendData(){
    const  postData2 = {
      "NOTIFNO" : this.nid,
          "STEXT" : this.ntitle,
          "NOTIFTYPE" : this.ntype,
          "DONOTIF" : this.nmsd,
          "PERSON" : "ABAPER5",
          "DONOTIFC" : this.nstdat,
          "STOFMAL" : this.nedat,
          "EDOFMAL" : "",
          "PRIORITY" : this.nprior,
          "EQNO" : this.nen,
          "BRKIND" : "",
          "PLANT" : this.ncc,
          "FUNLOC" : "WTF",
          "MAINTITEM" : "",
          "MAINTPLAN" : "",
          "KEY" : "",
          "GRPCNT" : ""
 };
    const url = `api/maint_notu`;
    this.http.post(url, postData2).subscribe(data => {
      this.updateResponse = data;
    
      })
  }

  createData(){
    const  postData3 = {
      // "NOTIFNO" : this.nid2,
      //     "STEXT" : this.ntitle2,
      //     "NOTIFTYPE" : this.ntype2,
      //     "DONOTIF" : this.nmsd2,
      //     "DONOTIFC" : this.nstdat2,
      //     "PRIORITU" : this.nprior2,
      //     "PLANT" : this.ncc2,
      //     "EQNO" : this.nen2,
      //     "FUNLOC" : "WTF",
      //     "PERSON" : "ABAPER5",
      //     "STOFMAL" : this.nedat2,
      //     "EDOFMAL" : "",
      //     "BRKIND" : "",
      //     "MAINTPLAN" : "",
      //     "MAINTITEM" : "",
      //     "KEY" : "",
      //     "GRPCNT" : ""
             
              
        "NOTIFNO" : this.notif2,
         "STEXT" : "material detachment YUJ",
         "NOTIFTYPE" : "B2",
         "DONOTIF" : "2020-01-12",
         "DONOTIFC" : "2020-01-15",
         "PRIORITYU" : "2",
         "PLANT" : "SA07",
         "EQNO" : "1003",
         "FUNLOC" : "WTF",
         "PERSON" : "ABAPER4",
         "STOFMAL" : "2020-01-11",
         "EDOFMAL" : "",
         "BRKIND" : "",
         "MAINTPLAN" : "",
         "MAINTITEM" : "",
         "KEY" : "",
         "GRPCNT" : ""


 };
    const url = `api/maint_notc`;
    
    this.http.post(url, postData3).subscribe(data => {
      debugger;
      this.updateResponse2 = data;
    
      })
  }
}
