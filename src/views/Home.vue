<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import PessoaService from '@/domain/pessoa/pessoa.service';
import Pessoa from '../domain/pessoa/pessoa.entity';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

  private pessoaService = new PessoaService();

  created() {
    this.pessoaService.buscarTodasPessoas().then(pessoas => console.log(pessoas));
  }

}
</script>
