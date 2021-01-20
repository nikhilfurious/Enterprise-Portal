import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'http.service';

@Component({
  selector: 'app-workorder',
  templateUrl: './workorder.component.html',
  styleUrls: ['./workorder.component.scss']
})
export class WorkorderComponent implements OnInit {

 
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

  workorder: any;
  wid: any;
  wtitle: any;
  wtype: any;
  wstdat: any;
  wedat: any;
  wo: any;
  w_ncc: any;
  w_nmsd: any;
  w_nen: any;
  w_nprior: any;
  updateResponse: Object;
  nid2: any;
  ntitle2: any;
  ntype2: any;
  nmsd2: any;
  nstdat2: any;
  nprior2: any;
  ncc2: any;
  nen2: any;
  nedat2: any;
  workorder_notifcation: any;
  work_order_title: any;
  wokordernumber: any;
  workorder_number: any;
  workorder_name: any;
  workorder_priority: any;
  workorder_eqnr: any;
  workorder_description: any;
  workorder_type: any;
  workorder_start_date: any;
  workorder_end_date: any;
  workorder_number2: any;
  workorder_notifcation2: any;
  workorder_priority2: any;
  workorder_eqnr2: any;
  workorder_ordtyp: any;
  wo_notif2: any;
  wo_prior2: any;
  wo_eqpnr2: any;
  wo_name2: any;
  reason2: any;


  
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
    const url = `api/maint_wod`;
    this.http.post(url, postData1).subscribe(data => {
      this.products = data;
    
      this.workorder = this.products.ITAB.item;
      debugger;
      console.log(this.workorder);
     
      })
  }



  //retrivew single row
  retrieveRow(i){
      this.filterorder = this.workorder[i];
    debugger;
    console.log(this.filterorder);
    this.workorder_number = this.filterorder.AUFNR;
    this.workorder_priority = this.filterorder.PRIOK;
    this.workorder_name = this.filterorder.ANING;
    this.workorder_eqnr = this.filterorder.EQUNR;
    this.workorder_description = this.filterorder.EQKTX;
    this.workorder_type = this.filterorder.AUART;
    this.workorder_start_date = this.filterorder.GLTRP;
    this.workorder_end_date = this.filterorder.GSTRP;
    this.workorder_notifcation = this.filterorder.QMNUM;
   
   
  }

  sendData(){
    const  postData2 = {
         "ORDNO" : this.workorder_number,
        "NOTIFNO" : this.workorder_notifcation,
        "PRIORITY" : this.workorder_priority,
        "EQNO" : this.workorder_eqnr,
        "OBJWC" : "",
        "PERSON" : "abaper5",
        "MAINTPLAN" : "",
        "MAINTITEM" : "",
        "ORDTYP" : "PM07",
        "ORDCAT" : "",
        "CREADTEDON" : "2020-01-10",
        "DESC" : this.workorder_description,
        "FUNLOC" : "WTF",
        "PLANT" : "SA07",
        "FINDAT" : this.workorder_end_date,
        "STRDAT" : this.workorder_start_date,
        "KEY" : "",
        "GRPCNT" : ""

 };
    const url = `api/maint_wou`;
    this.http.post(url, postData2).subscribe(data => {
      this.updateResponse = data;
    
      })
  }

  createData(){
    const  postData3 = {
      
        "ORDNO" : this.workorder_number2,
        "NOTIFNO" : this.wo_notif2,
        "PRIORITY" : this.wo_prior2,
        "EQNO" : this.wo_eqpnr2,
        "OBJWC" : "",
        "PERSON" : this.wo_name2,
        "MAINTPLAN" : "",
        "MAINTITEM" : "",
        "ORDTYP" : "PM07",
        "ORDCAT" : "",
        "CREADTEDON" : "2020-01-10",
        "DESC" : this.reason2,
        "FUNLOC" : "WTF",
        "PLANT" : "SA07",
        "FINDAT" : "",
        "STRDAT" : "",
        "KEY" : "",
        "GRPCNT" : ""
     

        // "ORDNO" : this.workorder_number2,
        // "NOTIFNO" : this.workorder_notifcation2,
        // "PRIORITY" : this.workorder_priority2,
        // "EQNO" : this.workorder_eqnr2,
        // "OBJWC" : "",
        // "PERSON" : "abaper4",
        // "MAINTPLAN" : "",
        // "MAINTITEM" : "",
        // "ORDTYP" : this.workorder_ordtyp,
        // "ORDCAT" : "",
        // "CREADTEDON" : "2020-01-10",
        // "DESC" : "",
        // "FUNLOC" : "WTF",
        // "PLANT" : "SA07",
        // "FINDAT" : "",
        // "STRDAT" : "",
        // "KEY" : "",
        // "GRPCNT" : ""

 };
    const url = `api/maint_woc`;
    debugger;
    this.http.post(url, postData3).subscribe(data => {
      this.updateResponse = data;
    
      })
  }
}
