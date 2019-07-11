export class Endereco {

  id: string;

  cidade: string;

  cep: string;

  logradouro: string;

  complemento: string;

  constructor(obj?: any) {
    obj = obj || {};
    this.id = obj.id;
    this.cidade = obj.cidade || '';
    this.cep = obj.cep || '';
    this.logradouro = obj.logradouro || '';
    this.complemento = obj.complemento || '';
  }
}