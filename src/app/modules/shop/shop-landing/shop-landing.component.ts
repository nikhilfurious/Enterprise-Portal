import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-landing',
  templateUrl: './shop-landing.component.html',
  styleUrls: ['./shop-landing.component.scss']
})
export class ShopLandingComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/shop/login'])
  }

}
