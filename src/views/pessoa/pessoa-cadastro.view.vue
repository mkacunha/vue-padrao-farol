<template>
  <v-form ref="form" v-model="valid">
    <pre>
        {{ pessoa }}
    </pre>

    <v-text-field v-model="pessoa.nome" :rules="nameRules" :counter="10" label="Name"></v-text-field>

    <v-btn :disabled="!valid" color="success" @click="validate">Validate</v-btn>

    <v-btn color="error" @click="reset">Reset Form</v-btn>

    <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
  </v-form>
</template>
<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import Pessoa from "@/domain/pessoa/pessoa.entity";
import FormDecorator from "@/shared/form/form.decorator";

@Component({})
export default class PessoaCadastro extends Vue {
  pessoa = new Pessoa();
  form = new FormDecorator(this);
  valid = true;

  nameRules = [
    (v: any) => !!v || "Nome é obrigatório",
    (v: any) => (v && v.length <= 10) || "Nome deve ter menos que 10 caracteres"
  ];

  validate() {
    this.form.validate();
  }

  reset() {
    this.form.reset();
  }

  resetValidation() {
    this.form.resetValidation();
  }
}
</script>
