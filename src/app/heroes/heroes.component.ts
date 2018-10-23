import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Sexo } from '../person';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']

})

export class HeroesComponent implements OnInit {

  hero : Hero  = {
     id : null,
     name : null,
     power: null,
     sexo : null
  };

  heroes = HEROES;

  selectedHero: Hero;

  onSelected(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
    this.hero = new Hero("Meteoro de Foda-se ", 2, "Super Rol", Sexo.Masculino);

  }

}
