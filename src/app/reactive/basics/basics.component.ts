import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  public basicForm: FormGroup = this.formBuilder.group({
    name: ["RTX 4080ti", [Validators.required, Validators.min(3)]],
    price: [0, [Validators.min(1), Validators.required]],
    stock: [0, [Validators.min(1), Validators.required]],
  });


  constructor(private formBuilder: FormBuilder) { }

  validateField(field: string) {
    return this.basicForm.controls[field].errors && this.basicForm.controls[field].touched;
  }

  ngOnInit(): void {
    this.basicForm.reset({
      name: "Tarjeta cool",
      price: 100
    })
  }

  save() {
    if (this.basicForm.invalid) {
      this.basicForm.markAllAsTouched();
      return;
    }

    this.basicForm.reset();
  }
}
