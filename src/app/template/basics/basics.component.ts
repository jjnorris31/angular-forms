import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  @ViewChild("basicForm") basicForm!: NgForm;

  initForm = {
    name: "",
    price: 10,
    stock: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  productNameValid(): boolean {
    return this.basicForm?.form.controls.product?.invalid
    && this.basicForm?.form.controls.product?.touched
  }

  productPriceValid(): boolean {
    return this.basicForm?.form.controls.price?.invalid
      && this.basicForm?.form.controls.price?.touched
  }

  save() {
    this.basicForm.resetForm({
      price: 0,
      stock: 0,
    });
  }


}
