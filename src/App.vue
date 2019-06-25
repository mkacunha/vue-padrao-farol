<template>
  <v-app id="app">
    <div id="nav">
      <router-link to="/cadastro">Cadastro</router-link>|
      <router-link to="/consulta">Consulta</router-link>
    </div>
    <router-view/>
  </v-app>
</template>