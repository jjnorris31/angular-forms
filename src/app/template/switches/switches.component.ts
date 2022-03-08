import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  person = {
    gender: "F",
    notifications: false,
  }

  terms = false;

  constructor() { }

  ngOnInit(): void {
  }

}
