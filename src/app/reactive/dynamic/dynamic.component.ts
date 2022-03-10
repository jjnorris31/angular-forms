import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  dynamicForm: FormGroup = this.formBuilder.group({
    name: ["JuanJo", [Validators.minLength(3), Validators.required]],
    favorites: this.formBuilder.array([
      ["Metal Gear", [Validators.required]],
      ["Dea", [Validators.required]]], Validators.required)
  });


  get favoritesArray() {
    return this.dynamicForm.get("favorites") as FormArray;
  }

  addFavorite(name: string) {
    this.favoritesArray.push(new FormControl(name, Validators.required));
  }

  deleteFavorite(index: number) {
    this.favoritesArray.removeAt(index);
  }


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public validField(field: string) {
    return this.dynamicForm.controls[field].invalid;
  }

}
