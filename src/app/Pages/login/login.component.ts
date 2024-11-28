import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { json } from 'express';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:any ={
  "username": '',
  "password":'',
  }
  http=inject(HttpClient);

  router=inject(Router);

  // constructor(private router: Router){

  // }

  
  
  onLogin(){
   debugger
    this.http.post("http://localhost:3000/login",this.loginObj).subscribe((res:any)=>{
      console.log(this.loginObj.value);
      if(res.message ==="Login successful"){
        alert('success');
         localStorage.setItem("leaveuser",JSON.stringify(res.data));
         this.router.navigateByUrl("dashboard")
       
      }else
      alert('checklogin credentials')
    })
  }
  
  }
