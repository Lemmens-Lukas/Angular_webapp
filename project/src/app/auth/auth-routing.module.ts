import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";

const authRoutes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
