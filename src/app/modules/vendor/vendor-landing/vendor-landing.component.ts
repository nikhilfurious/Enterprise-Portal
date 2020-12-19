import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-landing',
  templateUrl: './vendor-landing.component.html',
  styleUrls: ['./vendor-landing.component.scss']
})
export class VendorLandingComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['/vendor/login'])
  }

}
