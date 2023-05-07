<script>
  import NavigationElement from "./navigation_element.svelte";

  export let hidden = false;
  export let isMobile = false;
</script>

<div class="{hidden ? 'hide' : ''}{isMobile ? ' nav-mobile' : ''}">
  <NavigationElement />
  <NavigationElement path="/styleguide" name="Styleguide" />
  <NavigationElement path="/concept" name="Concept" />
  <NavigationElement path="/copyright" name="Copyright" />
  <NavigationElement path="/film-project" name="Film Project" />
  <NavigationElement path="/animations" name="Animations" />
  <NavigationElement path="/file-types" name="Filetypes" />
  <NavigationElement path="/cookies" name="Cookies" />
  <NavigationElement path="/reflection" name="Reflection"/>
  <NavigationElement path="/imprint" name="Imprint" />
</div>

<style>
  div {
    display: flex;
    justify-content: space-between;
    background-color: #00296b;
    flex-direction: row;
    text-align: center;
    width: 100%;
    z-index: 1;
    position: relative;
  }

  .hide {
    display: none;
  }

  .nav-mobile {
    flex-direction: column;
    height: 100%;
  }
</style>
