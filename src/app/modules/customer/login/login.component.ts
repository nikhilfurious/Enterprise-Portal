import { Component, OnInit } from '@angular/core';
import { Posts } from '../classes/postSample';
// import { HttpService } from '../http.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  // objPosts:Posts;
  ngOnInit(): void {

  }
  name;
  password;
  postData(){
    // console.log(this.name, this.password)
    // let url = "http://httpbin.org/post"
    // this.http.post(url,{name:this.name})
    // .toPromise().then((data:any)=>{
    //   console.log(data)
    // })
  }
}
