import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-landing',
  templateUrl: './customer-landing.component.html',
  styleUrls: ['./customer-landing.component.scss']
})
export class CustomerLandingComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/customer/login'])
  }

}
