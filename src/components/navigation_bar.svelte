<script>
  import NavigationElement from "./navigation_element.svelte";

  export let hidden = false;
  export let isMobile = false;
</script>

<div class="{hidden ? 'hide' : ''}{isMobile ? ' nav-mobile' : ''}">
  <NavigationElement />
  <NavigationElement path="/wireframes" name="Storytelling/ Wireframes" />
  <NavigationElement path="/styleguide" name="Styleguide" />
  <NavigationElement path="/copyright" name="Copyright" />
  <NavigationElement path="/licenses" name="Licenses" />
  <NavigationElement path="/image-types" name="Image Filetypes" />
  <NavigationElement path="/video-types" name="Video Filetypes" />
  <NavigationElement path="/audio-types" name="Audio Filetypes" />
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
