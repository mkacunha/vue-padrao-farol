<template>
  <v-form ref="form" @input="alteracaoForm">
    <pre>
            {{ endereco }}
        </pre>

    <h2>Endereço</h2>

    <v-text-field v-model="endereco.cidade" :rules="rules.cidade" label="Cidade" @input="'console.log(1)'"></v-text-field>

    <v-text-field v-model="endereco.cep" :rules="rules.cep" label="CEP"></v-text-field>

    <v-text-field v-model="endereco.logradouro" :rules="rules.logradouro" label="Logradouro"></v-text-field>

    <v-text-field v-model="endereco.complemento" label="Complemento"></v-text-field>
  </v-form>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Endereco } from "@/domain/pessoa/endereco.entity";

@Component({})
export default class EnderecoComponent extends Vue {
  @Prop({ required: true}) endereco?: Endereco;


  get rules(): any {
    return {
      cidade: [(v: any) => !!v || "Cidade é obrigatório"],
      cep: [(v: any) => !!v || "CEP é obrigatório"],
      logradouro: [(v: any) => !!v || "Logradouro é obrigatório"]
    };
  }

  alteracaoForm(valid: boolean) {
    this.$emit('valid', valid);
    if (valid) {
      this.$emit('endereco', this.endereco);
    }
  }
}
</script>
