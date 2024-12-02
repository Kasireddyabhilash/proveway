import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    
    MatListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
   
  }
  dashboardData = {
    totalEmployee: 100,
    totalProject: 50,
    recentProjects: [
      { projectName: 'Project A' },
      { projectName: 'Project B' },
      { projectName: 'Project C' }
    ],
    recentEmployee: [
      { employeeName: 'John Doe' },
      { employeeName: 'Jane Smith' },
      { employeeName: 'Alice Brown' }
    ]
  };
}

