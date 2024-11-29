import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormControl, FormsModule, } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../../Core/employee.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';





@Component({
  selector: 'app-emp-add-edit',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
    MatDialogModule,
    //MatTableDataSource,
   MatTable,
   CommonModule
  ],
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {
  education: any = [
    'Metriculation-X',
    'Diploma-XII',
    'Intermediate-XII',
    'Graduate',
    'Post-Graduate',
  ];
 
  
  empForm!: FormGroup;
 
  constructor( private _fb: FormBuilder,
    private _empService: EmployeeService,
    // private _dialog: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    // {
    //   this.empForm = this._fb.group({
    //     FirstName: '',
    //     LastName: '',
    //     Email: '',
    //     DOB: '',
    //     Gender: '',
    //     Education: '',
    //     Company: '',
    //     Experience: '',
    //     Package: '',
    //   });
    // }
      this.empForm = this._fb.group({
        firstName: ['', Validators.required], // Required field
        lastName: ['', Validators.required], // Required field
        email: ['', [Validators.required, Validators.email]], // Required and must be a valid email
        dob: ['', Validators.required], // Required field
        gender: ['', Validators.required], // Required field
        education: ['', Validators.required], // Required field
        company: ['', Validators.required], // Required field
        experience: ['', [Validators.required, Validators.min(0)]], // Required and must be >= 0
        package: ['', [Validators.required, Validators.min(0)]], // Required and must be >= 0
      });
  }


  ngOnInit(): void {
    debugger
    this.empForm.patchValue(this.data);
   
  }
  onFormSubmit(){
    
      debugger
      if (this.empForm.valid) {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee Added Successfully');
            this.empForm.reset();
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      
    }
  }

    
  
  }