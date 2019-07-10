export default class Pessoa {
   nome: string;
   idade: number;
   
   constructor(obj: any) {
       this.nome = obj.nome || '';
       this.idade = obj.idade;
   }
}