import { Routes } from '@angular/router';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { SigninComponent } from './signin/signin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { adminguardsGuard } from './guard/adminguards.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {path:'student/signup', component:StudentsignupComponent},
  {path:'admin/signup', component:AdminsignupComponent},
  {path:'signin', component:SigninComponent},
  {path:'admin', children:[
    {path:'', component:AdminsignupComponent},
    {path:'dashboard', component:DashboardComponent}
  ],canActivate:[adminguardsGuard]}
];
