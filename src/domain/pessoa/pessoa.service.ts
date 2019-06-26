import Pessoa from './pessoa.entity';

export default class PessoaService {

  private http: any;

  constructor(http: any) {
    this.http = http;
  }

  public save(pessoa: Pessoa): Promise<Pessoa> {
    return Promise.resolve(new Pessoa());
  }
}
