import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee-landing',
  templateUrl: './employee-landing.component.html',
  styleUrls: ['./employee-landing.component.scss']
})
export class EmployeeLandingComponent implements OnInit {

  constructor(public router: Router) { }

  
  ngOnInit(): void {
    this.router.navigate(['/employee/login'])
  }
}
