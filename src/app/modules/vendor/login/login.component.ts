import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  name: string = '';
  password = '';
  url=`api/vendor_login`;


  constructor(public service:HttpService, public http:HttpClient, private router: Router) { }
  
  ngOnInit(): void {
    
  }

  onSubmit(){

  }
 login_status: string;
 showError = false
  postData(){
    console.log(this.name, this.password)

    
    this.http.post(this.url,{USERNAME:this.name, PASSWORD:this.password}).toPromise().then((data:any)=>{
      const VENDORID = data.VENDORID;
       this.service.responseVendId = data.VENDORID;
      this.login_status = data.STATUS;
      if(this.login_status=="SUCCESS"){
        alert("login successfully");
      this.router.navigateByUrl("/vendor/profile");
   
      }
      else
        this.showError = true;
      console.log(data)
      console.log( this.login_status)
    }).catch(err => console.error);

    console.log(this.login_status)
  }

}
