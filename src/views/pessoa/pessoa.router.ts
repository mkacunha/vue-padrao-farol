import PessoaCadastro from '@/views/pessoa/pessoa-cadastro.view.vue';
import PessoaCadastroDetail from '@/views/pessoa/pessoa-cadastro-detail.view.vue';
import PessoaConsulta from '@/views/pessoa/pessoa-consulta.view.vue';

export default [
  {
    path: '/cadastro',
    name: 'cadastro',
    component: PessoaCadastro,
    children: [
      {
        path: 'detail',
        name: 'cadastroDetail',
        component: PessoaCadastroDetail
      }
    ]
  },
  {
    path: '/consulta',
    name: 'consulta',
    component: PessoaConsulta
  }
];
