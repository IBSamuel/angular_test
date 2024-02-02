import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface StudentInterface {
firstName:String,
lastName:String,
email:String,
password:String
}

@Component({
  selector: 'app-studentsignup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './studentsignup.component.html',
  styleUrl: './studentsignup.component.css'
})
export class StudentsignupComponent {
  public first_name = ""
  public last_name=""
  public email =""
  public password=""
constructor(public routes:Router) {

}

public studentArray:StudentInterface[] =[]
ngOnInit(){
  if(localStorage['studentDetails']){
    this.studentArray = JSON.parse(localStorage['studentDetails'])
  }
}

studentSignup(){
 let  studentObj = {
    firstName: this.first_name,
    lastName: this.last_name,
    email:this.password,
    password:this.password
  }
  this.studentArray.push(studentObj)
  localStorage.setItem('studentDetails',(JSON.stringify(this.studentArray)))

}
}
