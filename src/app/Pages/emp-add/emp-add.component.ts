import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../Core/employee.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp-add',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    // MatTableDataSource,
    //MatTableModule,
    MatPaginator,
    CommonModule,
    MatTableModule
  ],
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css'],
})
export class EmpAddComponent implements OnInit {
  title = 'crud-app';
  displayedColumns: string[] = [
    'id',
    'FirstName',
    'LastName',
    'Email',
    'DOB',
    'Gender',
    'Education',
    'Company',
    'Experience',
    'Package',
    'action',
  ];
  dataSource: any;
  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService
  ) {}
  ngOnInit(): void {
    this.getEmployeeList();
  }
  openAddEmpForm() {
    const dialogRef = this._dialog.open(EmpAddEditComponent);
  }
  applyFilter() {}
  openEditForm(data: any) {
    debugger
    this._dialog.open(EmpAddEditComponent, {
      data,
    });
  }
  deleteEployee(id: number) {
    debugger
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        alert('Employee deleted!');
      },
      error: console.log,
    });
  }
  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource = res;
      },
      error: console.log,
    });
  }
}