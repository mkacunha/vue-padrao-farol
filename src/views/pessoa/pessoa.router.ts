import PessoaCadastro from '@/views/pessoa/pessoa-cadastro.view.vue';
import PessoaConsulta from '@/views/pessoa/pessoa-consulta.view.vue';

export default [
    {
        path: '/cadastro',
        name: 'cadastro',
        component: PessoaCadastro,
    },
    {
        path: '/consulta',
        name: 'consulta',
        component: PessoaConsulta,
    },
]