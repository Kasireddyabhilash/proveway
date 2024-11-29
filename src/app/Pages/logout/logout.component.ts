import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'], // Fixed typo
})
export class LogoutComponent {
  constructor(private router: Router) {} // Inject Router

  confirmLogout() {
    // Clear authentication tokens or session data
    localStorage.clear(); // Example: Clearing localStorage
    sessionStorage.clear();

    // Redirect to the login page
    this.router.navigate(['/login']);
  }

  cancelLogout() {
    // Redirect back to the dashboard or home page
    this.router.navigate(['/dashboard']);
  }
}
