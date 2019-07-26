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
            <b-dropdown-item href="experiencia">Experiencia</b-dropdown-item>
            <b-dropdown-item href="/whoweare/#testimonios">Testimonios</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item  to="/contact">Contactanos</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
    <router-view class="views"/>

    <footer class="footer">
      <div class="">
        <b-row>
          <b-col cols="12" sm="12" md="6" lg="6" class="d-flex justify-content-center">
            <b-row>
              <b-col cols="12">
                <small>Telefono</small>
                <p>
                  01 (442) 123456
                </p>
              </b-col>

              <b-col cols="12">
                <small>Email</small>
                <p>
                  tucorreo@ghpatrimonio.com
                </p>
              </b-col>
            </b-row>
            
          </b-col>

          <b-col cols="12" sm="12" md="6" lg="6" class="d-flex justify-content-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur in autem repudiandae, harum eum, voluptatum voluptatem praesentium sunt atque quidem pariatur quam temporibus. Quo, atque minima architecto aut accusamus fuga.
          </b-col>
        </b-row>
      </div>
    </footer>
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

#nav a{
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

.dropdown:hover>.dropdown-menu {
  display: block;
}

#nav a.dropdown-item:hover{
  background-color: rgb(41, 143, 238);
}

#nav a.dropdown-item{
  color: #2c3e50; 
}

.dropdown-menu{
  padding-top: 0px !important;
  margin-top: 0px !important;
}

.footer{
  position: relative;
  background-color: #efefef;
}

.views{
  min-height: 77vh;
}

</style>
