<template>
  <div id="app">
    <v-app class="d-flex flex-column" >
      <v-toolbar
        elevation="4"
        max-height="65px"
      >
        <v-toolbar-title>School of English</v-toolbar-title>
        <v-spacer></v-spacer>

      <router-link class="px-3 black--text" to="/users">Usuarios</router-link>
      <router-link class="px-3 black--text" to="/levels">Niveles</router-link>
      </v-toolbar>
      <v-content>
        <router-view />
      </v-content>
  </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="css">
  .container{
    max-width: 700px;
    height: 100%;
    margin: 0px auto;
  }
  .h-100{
    height: 100%;
  }
  .v-main{
    background: rgb(121, 152, 177) !important;
  }
  a{
    text-decoration: none !important;
  }
  .v-application .router-link-active{
    color: rgb(33, 33, 126) !important;
  }
</style>