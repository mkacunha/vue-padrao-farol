import axios from 'axios';
import Pessoa from './pessoa.entity';

export default class PessoaService {

    buscarTodasPessoas(): Promise<Pessoa[]> {
        return axios.get('/mock/person.json').then(response => response.data.map((pessoa: any) => new Pessoa(pessoa)));
    }
}