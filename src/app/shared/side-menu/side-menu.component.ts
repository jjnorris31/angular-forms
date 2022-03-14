import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string,
  route: string,
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  public templateMenu: MenuItem[] = [
    {
      text: "Basics",
      route: "template/basics",
    },
    {
      text: "Dynamic",
      route: "template/dynamic",
    },
    {
      text: "Switches",
      route: "template/switches",
    }
  ]

  public reactiveMenu: MenuItem[] = [
    {
      text: "Basics",
      route: "reactive/basics",
    },
    {
      text: "Dynamic",
      route: "reactive/dynamic",
    },
    {
      text: "Switches",
      route: "reactive/switches",
    }
  ]

  public validationsMenu: MenuItem[] = [
    {
      text: "Login",
      route: "auth/login",
    },
    {
      text: "SignUp",
      route: "auth/signup",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
