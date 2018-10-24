import { Injectable } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/mock-heroes';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor() { }

//First Service created
  getHeroes() : Observable<Hero[]> {
      return of(HEROES);
}


}
