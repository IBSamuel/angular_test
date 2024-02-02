import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public editFirst = ""
  public editLast = ""
  public editEmail = ""
  public editPassword = ""
  public userId:number=0
  public newStudentArray:any[] = []
  editInfo(i:number){
this.userId = i
  }
  ngOnInit() {
    this.newStudentArray = JSON.parse(localStorage['studentDetails']);
    console.log(this.newStudentArray);
  }

  deleteStudent(index:number){
    this.newStudentArray.splice(index,1)
    localStorage.setItem('studentDetails',(JSON.stringify(this.newStudentArray)))
    window.location.reload()
  }
  editChanges(){
    let studentUpdate = {
      firstName:this.editFirst,
      lastName:this.editLast,
      email:this.editEmail,
      password:this.editPassword
    }
    this.newStudentArray.splice(this.userId,1,studentUpdate)
    localStorage.setItem('studentDetails',(JSON.stringify(this.newStudentArray)))
  }



}
