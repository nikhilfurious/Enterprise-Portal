import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopfloor-landing',
  templateUrl: './shopfloor-landing.component.html',
  styleUrls: ['./shopfloor-landing.component.scss']
})
export class ShopfloorLandingComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/shopfloor/login'])
  }

}
