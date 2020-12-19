import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showExpantion = false
  expandMenu = false
  showMenu(){
    this.expandMenu = !this.expandMenu
    if(this.showExpantion == false)
    {
      setTimeout(()=>{                           //<<<---using ()=> syntax
        this.showExpantion = true;
      }, 500);
    }
    if(this.showExpantion == true)
      this.showExpantion = false;
  }
  closeMenu(){
    this.expandMenu = false
    this.showExpantion = false
  }
}
