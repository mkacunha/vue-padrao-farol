<template>
  <v-form ref="form" v-model="form.valid" lazy-validation>
    <pre>
        {{ pessoa }}
    </pre>

    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

    <v-btn :disabled="!valid" color="success" @click="validate">Validate</v-btn>

    <v-btn color="error" @click="reset">Reset Form</v-btn>

    <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
  </v-form>
</template>
</template>
<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import Pessoa from "../../domain/pessoa/pessoa.entity";

export default class PessoaCadastro extends Vue {
  form = {
    valid: false,
    nameRules: [
      
    ]
  }
  pessoa = new Pessoa();

  validate() {

  }

  reset() {

  }

  resetValidation() {

  }
}
</script>

