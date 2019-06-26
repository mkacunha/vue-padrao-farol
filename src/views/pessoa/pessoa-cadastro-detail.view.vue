<template>
    <div>
        <h1>{{ menssagem }}</h1>
    </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
@Component({})
export default class PessoaCadastroDetail extends Vue {
    menssagem = 'Teste tela de detalhes de cadastro';
}
</script>
