import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public newStudentArray:any[] = []
  ngOnInit() {
    this.newStudentArray = JSON.parse(localStorage['studentDetails']);
    console.log(this.newStudentArray);
  }
  deleteStudent(index:number){
    this.newStudentArray.splice(index,1)
    localStorage.setItem('studentDetails',(JSON.stringify(this.newStudentArray)))
    window.location.reload()
  }

}
