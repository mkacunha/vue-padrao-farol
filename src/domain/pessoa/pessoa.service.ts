import Pessoa from './pessoa.entity';

export default class PessoaService {
  public save(pessoa: Pessoa): Promise<Pessoa> {
    return Promise.resolve(new Pessoa());
  }
}
