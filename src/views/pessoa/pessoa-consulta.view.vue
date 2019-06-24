<template>
    <div>
        <h1>{{ menssagem }}</h1>
    </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
@Component({})
export default class PessoaConsulta extends Vue {
    menssagem = 'Teste tela de consulta';
}
</script>
