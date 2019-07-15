<template>
  <div>
    <label for="filtro">Filtrar</label>
    <input name="filtro" type="text" @input="update" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Search extends Vue {
  update(event: any) {    
    this.$emit("filtro", event.target.value);
  }
}
</script>

