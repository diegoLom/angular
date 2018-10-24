import { Person } from "./person";
import {Sexo} from "./person";

export class Hero extends Person{

  power : string;
  
  constructor(power:string, id:number, name:string, sexo: Sexo){
    super(id, name, sexo);
    this.power = power;
}


}
