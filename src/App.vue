<template>
  <div id="app" c la>
    <div id="nav" class="bg-light">
      <router-link to="/">
        <h1>KC Ranch</h1>
      </router-link>
    </div>
    <router-view id="main" />
    <div id="footer" class="d-flex bg-light justify-content-center align-items-center">
      <h3>FOOTER</h3>
    </div>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 1vh;
    min-height: 9vh;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #000000;
  }

  #main {
    margin-top: 2vh;
    margin-bottom: 2vh;
    min-height: 76vh;
  }

  #footer {
    min-height: 10vh;
  }
</style>