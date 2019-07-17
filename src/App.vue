<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="primary" id="nav">
      <b-navbar-brand to="/">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Inicio</b-nav-item>

          <b-nav-item-dropdown text="Quienes Somos" right>
            <b-dropdown-item to="/whoweare">Mision</b-dropdown-item>
            <b-dropdown-item href="#">Experiencia</b-dropdown-item>
            <b-dropdown-item href="#">Testimonios</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item to="/contact">Contactanos</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  opacity: 0.7;
}
#nav a:hover {
  font-weight: bold;
  color: #ffffff;
  opacity: 1;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  text-decoration: underline;
  opacity: 1;
}
</style>
