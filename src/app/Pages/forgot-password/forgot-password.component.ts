import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    RouterLink
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email: string = '';

  onSubmit() {
    if (this.email) {
      // Call your password reset API here
      console.log('Password reset link sent to:', this.email);
      alert('A password reset link has been sent to your email.');
    } else {
      alert('Please enter a valid email address.');
    }
  }
}
