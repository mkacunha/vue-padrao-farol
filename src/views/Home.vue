<template>
  <div class="home">
    <search v-on:filtro="filtro = $event"></search>
    <lista :lista="pessoas"></lista>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Search from '@/views/Search.component.vue';
import Lista from '@/views/Lista.component.vue';

@Component({
  components: {
    Search,
    Lista
  },
})
export default class Home extends Vue {
  filtro = '';

  valores = [
    'Pessoa',
    'Maiko',
    'João',
    'Lucas'
  ]

  get pessoas() {
    if (this.filtro && this.filtro.length) {
      return this.valores.filter(value => value.includes(this.filtro));
    }
    return this.valores;
  }
}
</script>
