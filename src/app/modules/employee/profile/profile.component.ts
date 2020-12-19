import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isDisabled=true
  btn_text = "Edit"
  employeeName = "Dinesh"
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
