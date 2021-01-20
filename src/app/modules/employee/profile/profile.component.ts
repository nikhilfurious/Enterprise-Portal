import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  emp_id: string;
  fname: string;
  lname: string;
  mstatus: string;
  dob: string;
  country_key: string;
  gender: string;
  fadd: string;
  doj: string;
  street: string;
  city: string;
  pincode: string;
  mob: string;
  land: any;
  profile: any;
  userprofile: any;
  nationality: any;
  orgcode: any;

  constructor(private http: HttpClient,public service:HttpService) { }

  ngOnInit(): void {
    this.getData();
  }
 
  isDisabled=true
  btn_text = "Edit"

  enableEdit(){
    if(this.isDisabled == true)
    {
      this.isDisabled=false
      this.btn_text="Save"
    }
    else{
      //post

      //others
      this.isDisabled=true
      this.btn_text="Edit"
      const url = 'api/siva_employee_proup'
      const postData1 = {
        
          "EMPID":this.emp_id,
          "FNAME":this.fname,
          "LNAME":this.lname,
          "MSTATUS":this.mstatus,
          "DOB":this.dob,
          "NATIONALITY":this.nationality,
          "GENDER":this.gender,
          "FADD":this.fadd,
          "DOJ":this.doj,
          "STREET":this.street,
          "CITY":this.city,
          "PINCODE":this.pincode,
          "MOBILE":this.mob,
          "LAND":this.land
      }
this.http.post(url, postData1).subscribe(data => {
  console.log(data);
      })
    }
  }  
  
  getData() {
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
        



        
      })
}

}

