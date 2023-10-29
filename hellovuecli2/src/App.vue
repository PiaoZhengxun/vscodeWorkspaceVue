<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/myview">MyView</router-link>|
    <router-link to="/userinfo">Userinfo</router-link>|
     <router-link to="/parent">parent</router-link>|
     <router-link to="/parentview">parentview</router-link>|
     <router-link to="/beforeLogin">beforeLogin</router-link>|
     <router-link to="/lifeCycleView">lifeCycleView</router-link>|
     <router-link to="/beforeLogin2">beforeLogin2</router-link>|
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
