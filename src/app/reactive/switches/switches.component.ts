import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  switchesForm: FormGroup = this.formBuilder.group({
    gender: ['M', Validators.required],
    notifications: [false, Validators.required],
  })

  person = {
    gender: 'F',
    notifications: true
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.switchesForm.setValue(this.person);

    this.switchesForm.get('gender')?.valueChanges.subscribe(value => {
      console.log(value);
    })

    this.switchesForm.valueChanges.subscribe(form => {
      console.log(form);
    })
  }

  save() {
    this.person = {...this.switchesForm.value};
  }

}
