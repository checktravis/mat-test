<template>
  <header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
    <div class="mdl-layout--large-screen-only mdl-layout__header-row">
    </div>
    <div class="mdl-layout--large-screen-only mdl-layout__header-row">
      <h3>Name &amp; Title</h3>
    </div>
    <div class="mdl-layout--large-screen-only mdl-layout__header-row">
    </div>
    <div class="mdl-layout__tab-bar-container"><div class="mdl-layout__tab-bar-button mdl-layout__tab-bar-left-button"><i class="material-icons">chevron_left</i></div><div class="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark mdl-js-ripple-effect--ignore-events" data-upgraded=",MaterialRipple">
      <a href="#overview" class="mdl-layout__tab is-active">Overview<span class="mdl-layout__tab-ripple-container mdl-js-ripple-effect" data-upgraded=",MaterialRipple"><span class="mdl-ripple"></span></span></a>
      <a href="#features" class="mdl-layout__tab">Features<span class="mdl-layout__tab-ripple-container mdl-js-ripple-effect" data-upgraded=",MaterialRipple"><span class="mdl-ripple"></span></span></a>
      <a href="#features" class="mdl-layout__tab">Details<span class="mdl-layout__tab-ripple-container mdl-js-ripple-effect" data-upgraded=",MaterialRipple"><span class="mdl-ripple"></span></span></a>
      <a href="#features" class="mdl-layout__tab">Technology<span class="mdl-layout__tab-ripple-container mdl-js-ripple-effect" data-upgraded=",MaterialRipple"><span class="mdl-ripple"></span></span></a>
      <a href="#features" class="mdl-layout__tab">FAQ<span class="mdl-layout__tab-ripple-container mdl-js-ripple-effect" data-upgraded=",MaterialRipple"><span class="mdl-ripple"></span></span></a>
      <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" id="add" data-upgraded=",MaterialButton,MaterialRipple">
        <i class="material-icons" role="presentation">add</i>
        <span class="visuallyhidden">Add</span>
      <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></button>
    </div><div class="mdl-layout__tab-bar-button mdl-layout__tab-bar-right-button"><i class="material-icons">chevron_right</i></div></div>
  </header>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
