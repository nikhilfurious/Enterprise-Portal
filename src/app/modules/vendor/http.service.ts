import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  



  constructor(public http: HttpClient) { }

  responseCustId: any;
  
  
  quotDoc:any;

  userClickedCustId: any;
  userClickDate:any;
}
