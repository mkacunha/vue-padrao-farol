<template>
  <v-form ref="form" v-model="valid" class="form">
    <pre>
        {{ pessoa }}
    </pre>

    <v-text-field v-model="pessoa.nome" :rules="rules.nome" label="Name"></v-text-field>

    <v-text-field v-model="pessoa.idade" :rules="rules.idade" label="Idade"></v-text-field>

    <endereco-component :endereco="pessoa.endereco"/>

    <v-btn color="success" @click="validate">Validate</v-btn>

    <v-btn color="error" @click="reset">Reset Form</v-btn>

    <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>

    <router-view></router-view>
  </v-form>
</template>
<script lang='ts'>
import { Vue, Prop, Component } from "vue-property-decorator";
import Pessoa from "@/domain/pessoa/pessoa.entity";
import FormDecorator from "@/shared/form/form.decorator";
import EnderecoComponent from "@/shared/endereco/endereco.component.vue";

@Component({
  components: { EnderecoComponent }
})
export default class PessoaCadastro extends Vue {
  pessoa = new Pessoa();
  form = new FormDecorator(this);
  valid = true;

  validate() {
    this.form.validate();
  }

  reset() {
    this.form.reset();
  }

  resetValidation() {
    this.form.resetValidation();
  }

  get rules(): any {
    return {
      nome: [(v: any) => !!v || "Nome é obrigatório"],
      idade: [(v: any) => !!v || "Idade é obrigatório"]      
    };
  }
}
</script>
<style lang="sass" scoped>
.form
  padding: 20px
</style>
