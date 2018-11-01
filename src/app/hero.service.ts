import { Injectable } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/mock-heroes';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

constructor(private messageService: MessageService ) { }

//First Service created
  getHeroes() : Observable<Hero[]> {
     this.messageService.add('HeroService: fetched heroes');
      return of(HEROES);
}


}
