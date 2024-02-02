import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  public newInfoArray:StudentInterface[] = []
  ngOnInit(){
  }
  studentSignIn(){
    this.newInfoArray = JSON.parse(localStorage['AdminDetails'])
    this.newInfoArray.find((student,index)=>student.email == this.email && student.password == this.password)
    if(this.newInfoArray){
      console.log("Signed In")
    }


  }

}
