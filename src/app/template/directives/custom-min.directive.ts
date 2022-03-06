import {Directive, Input} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true
    }]
  })
export class CustomMinDirective implements Validator {
  @Input() minimum!: number;

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    return (control.value < this.minimum) ? {'customMin': true} : null;
  }
}
