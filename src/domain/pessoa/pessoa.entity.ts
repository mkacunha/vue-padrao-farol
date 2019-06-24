import { Endereco } from './endereco.entity';

export default class Pessoa {
    id: string;
    nome: string;
    idade: number;
    endereco: Endereco;

    constructor(obj?: any) {
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome || '';
        this.idade = obj.idade || 0;
        this.endereco = new Endereco(obj.endereco || {});
    }
}