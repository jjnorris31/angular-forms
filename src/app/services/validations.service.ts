import { Injectable } from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  public canBeStrider(control: FormControl): ValidationErrors | null {
    const value = control.value?.trim().toLowerCase();
    return !/^\w*strider\w*$/.test(value) ? null : {canBeStrider: true};
  }

  public bothEquals(field:string, anotherField: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue = formGroup.get(field)?.value;
      const anotherFieldValue = formGroup.get(anotherField)?.value;

      if (fieldValue !== anotherFieldValue) {
        formGroup.get(anotherField)?.setErrors({notEquals: true})
        return {
          notEquals: true
        }
      }

      formGroup.get(anotherField)?.setErrors(null)
      return null;
    }
  }
}
