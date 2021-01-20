import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  available: '0';
  taken:'9';
  leaveData: any;
  leaveList: any;
  data:any;
  applyData: Object;
  emp1id: any;
  fDate
  fdate: any;
 tdate: any;
  type: any;
  reason: any;
  quota1: any;
  quota2: any;
  quota3: any;
  available1: number;
  available2: number;
  available3: number;

  
  constructor(private http:HttpClient) { 
    this.getdata();
    this.sendData();
  }

  ngOnInit(): void {
  }
   getdata(){
   const postData1 = {
     "EMPID":"00005013"
   };
   const url ='api/siva_employee_leave';
    this.http.post(url,postData1).subscribe(data=>{
      this.leaveData = data;
      console.log(this.leaveData);
      //debugger;
      this.quota1=this.leaveData.IT_QUOTA1.item;
      this.quota2=this.leaveData.IT_QUOTA2.item;
      this.quota3=this.leaveData.IT_QUOTA3.item;
      this.leaveList = this.leaveData.IT_LEAVE; 
      this.available1 = this.quota1.ANZHL - this.quota1.KVERB;
      this.available2 = this.quota2.ANZHL - this.quota2.KVERB;
      this.available3 = this.quota3.ANZHL - this.quota3.KVERB;

      console.log(this.leaveList);
      console.log(this.quota1);
    })
  }
  sendData(){
    const postData2 ={
      "EMPID":this.emp1id,
     "FDAY":this.fdate,
     "LDAY":this.tdate,
     "HOLTYP":this.type,
    "REASON":this.reason,
     "CONTACT":"9898745"
    };
    const url='api/siva_employee_leaveup';
    
    this.http.post(url,postData2).subscribe(data=>{
      debugger;
      this.applyData = data;

      alert("Applied Successfully");
    })
  }
}
