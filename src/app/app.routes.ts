import { Routes } from '@angular/router';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { SigninComponent } from './signin/signin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { adminguardsGuard } from './guard/adminguards.guard';

export const routes: Routes = [
  {path:'signup', component:StudentsignupComponent},
  {path:'adminsignup', component:AdminsignupComponent},
  {path:'admin', children:[
    {path:'', component:AdminsignupComponent},
    {path:'signin', component:SigninComponent}
  ],canActivate:[adminguardsGuard]}
];
