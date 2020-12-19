import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  [x: string]: any;

  public products: any = [];
  public userprofile: any = [];
  httpClient: any;
  update:any;

  vendor_id: any;
  vendor_name: any;
  vendor_city: any;
  vendor_pc: any;
  vendor_address: any;
  vendor_phone:any;
  vendor_land:any;
  vendor_fax:any;
  // customer_address: any;
  // customer_region: any;
  // customer_city: any;
  // customer_postal_code: any;
  // customer_land1: any;
  // customer_phone: any;

  
  constructor(private http: HttpClient, public service:HttpService) { }

  ngOnInit(): void {
    this.getData();
  
  }
  isDisabled=true
  btn_text = "Edit"
  //edit option
   
  enableEdit(){
    if(this.isDisabled == true)
    {
      this.isDisabled=false
      this.btn_text="Save";
      
      
   
   
    }
    else{
      this.isDisabled=true
      this.btn_text="Edit"
      const url = `api/vendor_proup`;
      const  postData1 = {
        
 

          "VENDORID":this.vendor_id,
          "COUNTRY":this.vendor_land,
          "NAME":this.vendor_name,
          "CITY":this.vendor_city,
          "PINCODE":this.vendor_pc,
          "ADDRESS":this.vendor_address,
          "PHONE":this.vendor_phone,
          "FAX":this.vendor_fax
      }
     this.http.post(url, postData1).subscribe(data => {
       console.log(data);
     })
    }
    
  }
  getData() {
    const  postData1 = {
        //'CUSTOMERID': this.service.responseCustId
        "VENDORID":'SA100200'
       };
    const url = `api/vendor_profile_niks`;

    this.http.post(url, postData1).subscribe(data => {
        this.products = data;
       this.userprofile = this.products.ITAB_PROFILE.item;
      
         //console.log(this.userprofile);
       // console.log(this.products);
        this.vendor_id= this.userprofile.LIFNR;
        this.vendor_name=this.userprofile.NAME1;
        this.vendor_city=this.userprofile.ORT01;
        this.vendor_pc = this.userprofile.PSTLZ;
        this.vendor_address = this.userprofile.STRAS;
        this.vendor_phone= this.userprofile.TELF1
        this.vendor_land=this.userprofile.LAND1;
        this.vendor_fax=this.userprofile.TELFX;


        
      })
}

}