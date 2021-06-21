import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  // firstFormGroup!: FormGroup;
  // secondFormGroup!: FormGroup;
  isEditable = true;

  constructor() {}

  ngOnInit() {
    
  }
}