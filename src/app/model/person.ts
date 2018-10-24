export class Person {

  id : number;
  name : string;
  sexo : Sexo;

  constructor(id:number, name:string, sexo: Sexo){
    this.id = id;
    this.name = name;
    this.sexo = sexo;
  }

};


export enum Sexo {Masculino = 1, Feminino = 2};
