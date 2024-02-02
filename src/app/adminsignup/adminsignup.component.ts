import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
 public message =""

 public adminDetails:AdminInterface[] = []

 constructor (public router:Router){}
 ngOnInit(){
  if(localStorage['AdminDetails']){
    this.adminDetails = JSON.parse(localStorage['AdminDetails'])
  }
}
  signUpAdmin(){
    let  adminObj = {
      firstName: this.first_name,
      lastName: this.last_name,
      email:this.password,
      password:this.password
  }
  this.adminDetails.push(adminObj)
  localStorage.setItem('adminDetails',(JSON.stringify(this.adminDetails)))
  this.router.navigate(['/signin'])
  this.message=`Submit Successful`
  setTimeout(()=>{
    this.message=``
  },1000)


  }

}
