import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isDisabled=true
  btn_text = "Edit"
  customerName = "Dinesh"
  enableEdit(){
    if(this.isDisabled == true)
    {
      this.isDisabled=false
      this.btn_text="Save"
    }
    else{
      //post

      //others
      this.isDisabled=true
      this.btn_text="Edit"
    }
    
  }
}
