import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  person: Person = {
    name: "Fernando",
    favorites: [
      {
        id: 1, name: "Metal Gear"
      }
    ]
  }

  favorite: Favorite = {
    name: "",
    id: this.person.favorites.length + 1
  }

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log('posted');
  }

  addGame() {
    this.person.favorites.push(this.favorite);
    this.favorite = {
      name: "",
      id: this.person.favorites.length + 1
    }
  }

  deleteGame(i: number) {
    this.person.favorites = this.person.favorites.filter((item, index) => i !== index)
  }
}
