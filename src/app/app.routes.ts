import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { AppComponent } from './app.component';
import { EmpAddComponent } from './Pages/emp-add/emp-add.component';
import { EmpAddEditComponent } from './Pages/emp-add-edit/emp-add-edit.component';


export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'add',component:EmpAddComponent},
    {path:'edit',component:EmpAddEditComponent},
    {path:'dashboard',component:AppComponent},



];

