import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintain-landing',
  templateUrl: './maintain-landing.component.html',
  styleUrls: ['./maintain-landing.component.scss']
})
export class MaintainLandingComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/maintain/login'])
  }

}
  