import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {delay, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmailValidationService implements AsyncValidator {

  constructor(private httpClient: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log(email);
    return this.httpClient.get<any[]>(`http://localhost:3000/usuarios?q=${email}`).pipe(
      // delay(3000),
      map(resp => {
        return ( resp.length === 0) ? null : {takenEmail: true}}
      ));
  }
}
