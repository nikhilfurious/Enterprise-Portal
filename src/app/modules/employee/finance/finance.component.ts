import { HttpClient, HttpClientModule } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  selectedMonth: any;
  selectedYear: any;
  paySlip: any;
  date: any;
  basicPay = 0;
  rent = 0;
  travel =0 ;
  salary=0;
  profile: any;
  userprofile: any;
  emp_id: any;
  fname: any;
  lname: any;
  mstatus: any;
  dob: any;
  nationality: any;
  doj: any;
  gender: any;
  orgcode: any;
  street: any;
  city: any;
  pincode: any;
  mob: any;
  land: any;
  personalAreaCode: any;
  personalArea: any;
  fullName: any;
  seqno: any;
  constructor(private http:HttpClient) {
    this.loadData();
    this.getProfile();
   }

  ngOnInit(): void {
  }
  changeMonth(value){
    this.selectedMonth = value;
  }
  changeYear(value){
    this.selectedYear = value;
  }

  
  loadData(){
     this.date = this.selectedYear+this.selectedMonth;
    console.log(this.date);
  
    const postData ={
        "EMPID":"00005014",
        "DATE":this.date
      };

    const url ='api/siva_employee_salary';
    this.http.post(url,postData).subscribe(data=>{
    this.paySlip=data;
     debugger;
     console.log(this.paySlip);


    this.basicPay = Number(this.paySlip.IT_SALARY.BET01);
    //  console.log(this.basicPay);
    this.rent = Number(this.paySlip.IT_SALARY.BET02);
    this.travel = Number(this.paySlip.IT_SALARY.BET03);
    this.salary = this.basicPay+this.rent+this.travel;
     console.log(this.salary);
     this.seqno = this.paySlip.IT_SALARY.SEQNR;
       
  
  })
  }
  getProfile() {
    const  postData1 = {
        
          "EMPID":"00005014"
        
       };
    const url = `api/siva_employee_profile`;

    this.http.post(url, postData1).subscribe(data => {
        this.profile = data;
       this.userprofile = this.profile.IT_EMPLOYEE_PROFILE;
      
         //console.log(this.userprofile);
       // console.log(this.products);
        this.emp_id= this.userprofile.PERNR;
        this.fname=this.userprofile.VNAMC;
        this.lname=this.userprofile.NCHMC;
        this.mstatus = this.userprofile.FAMST;
        this.dob = this.userprofile.GBDAT;
       
        this.nationality=this.userprofile.NATIO;
        this.doj=this.userprofile.BEGDA;
        this.gender=this.userprofile.GESCH;

        //ORGANIZATION 
        this.doj=this.userprofile.BEGDA
        this.orgcode=this.userprofile.ORGEH;
        this.street= this.userprofile.STRAS;
        this.city=this.userprofile.ORT01;
        this.pincode=this.userprofile.PSTLZ;
        this.mob=this.userprofile.TELNR;
        this.land=this.userprofile.LAND1


        this.personalAreaCode=this.userprofile.WERKS;
        this.personalArea=this.userprofile.NAME1;
        this.fullName=this.fname+' '+ this.lname;

   
        
      })
}
}

