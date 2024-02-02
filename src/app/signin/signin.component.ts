import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface StudentInterface {
  email:String,
  password:String

  }
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  public email =""
  public password=""
  constructor (public routes:Router){}

  public newInfoArray:StudentInterface[] = []

    ngOnInit() {
      this.newInfoArray = JSON.parse(localStorage['adminDetails']);
      // if (typeof localStorage !== 'undefined' && localStorage['adminDetails']) {
      // }
    }

  studentSignIn(){

    this.newInfoArray.find((student,index)=>student.email == this.email && student.password == this.password)
    if(this.newInfoArray){
      console.log("Signed In")
      this.routes.navigate(['/admin/dashboard'])

    }


  }

}
