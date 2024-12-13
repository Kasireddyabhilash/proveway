import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { AppComponent } from './app.component';
import { EmpAddComponent } from './Pages/emp-add/emp-add.component';
import { EmpAddEditComponent } from './Pages/emp-add-edit/emp-add-edit.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { authGuard } from './Guards/auth.guard';


export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'add',component:EmpAddComponent},
    {path:'edit',component:EmpAddEditComponent},
    {path:'dashboard',component:AppComponent},
    {path:'logout',component:LogoutComponent},
    {path:'dash',component:DashboardComponent},

    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: '**', redirectTo: 'login' }




];

