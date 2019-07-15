<template>
    <div>
        <ul>
            <li v-for="item in lista" :key="item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator';
@Component
export default class ListaComponente extends Vue {
    @Prop() lista?: string;
}
</script>


