import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { Sexo } from '../model/person';
import {HEROES} from '../model/mock-heroes';
import {HeroService} from '../services/hero/hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']

})

export class HeroesComponent implements OnInit {

  hero : Hero;

  heroes = HEROES;

  selectedHero: Hero;

  getHeroes() : void {
    this.heroes = this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService : HeroService) { }

  onSelected(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.hero = new Hero("Meteoro de Foda-se ", 2, "Super Rol", Sexo.Masculino);

    //Bad Practices
    this.getHeroes();
  }


}
