import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AdminInterface {
  firstName:String,
  lastName:String,
  email:String,
  password:String
  }
@Component({
  selector: 'app-adminsignup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './adminsignup.component.html',
  styleUrl: './adminsignup.component.css'
})
export class AdminsignupComponent {
  public first_name = ""
 public last_name=""
 public email =""
 public password=""

 public adminDetails:AdminInterface[] = []
 ngOnInit(){
  if(localStorage['AdminDetails']){
    this.adminDetails = JSON.parse(localStorage['AdminDetails'])
  }
}
  signUpAdmin(){
    let  studentObj = {
      firstName: this.first_name,
      lastName: this.last_name,
      email:this.password,
      password:this.password
  }
  localStorage.setItem('adminDetails',(JSON.stringify(this.adminDetails)))
  }

}
