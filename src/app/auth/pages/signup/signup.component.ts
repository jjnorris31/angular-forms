import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationsService} from "../../../services/validations.service";
import {EmailValidationService} from "../../../services/email-validation.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('([a-zA-Z]*){1}')]
    ],
    email: ['', [Validators.required, Validators.email], [this.emailValidation]],
    username: ['', [Validators.required, this.validationsService.canBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmationPassword: ['', [Validators.required]],
  }, {
    validators: [this.validationsService.bothEquals('password', 'confirmationPassword')]
  });

  constructor(private formBuilder: FormBuilder,
              private emailValidation: EmailValidationService,
              private validationsService: ValidationsService) { }

  ngOnInit(): void {
  }

  get emailErrorMsg(): string {
    const errors = this.signUpForm.get('email')?.errors;
    if (errors?.required) {
      return 'Email es obligatorio'
    } else if (errors?.pattern) {
      return 'No tiene formato de correo'
    } else if (errors?.takenEmail) {
      return 'El email ya fue tomado'
    }
    return '';
  }

  notValidField(field: string) {
    return this.signUpForm.get(field)?.invalid
    && this.signUpForm.get(field)?.touched;
  }

  emailRequired() {
    return this.signUpForm.get('email')?.errors?.required && this.signUpForm.get('email')?.touched;
  }

  emailFormat() {
    return this.signUpForm.get('email')?.errors?.pattern && this.signUpForm.get('email')?.touched;
  }

  emailTaken() {
    return this.signUpForm.get('email')?.errors?.takenEmail && this.signUpForm.get('email')?.touched;
  }

  save() {
    console.log('hi');
  }


}
