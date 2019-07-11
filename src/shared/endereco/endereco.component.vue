<template>
  <v-form ref="form" @input="alteracaoForm">
    <h2>Endereço</h2>

    <v-text-field v-model="value.cidade" :rules="rules.cidade" label="Cidade"></v-text-field>

    <v-text-field v-model="value.cep" :rules="rules.cep" label="CEP"></v-text-field>

    <v-text-field v-model="value.logradouro" :rules="rules.logradouro" label="Logradouro"></v-text-field>

    <v-text-field v-model="value.complemento" label="Complemento"></v-text-field>
  </v-form>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Endereco } from "@/domain/pessoa/endereco.entity";

@Component({})
export default class EnderecoComponent extends Vue {

  @Prop({ required: true}) value?: Endereco;

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
      this.$emit('input', this.value);
    }
  }
}
</script>
