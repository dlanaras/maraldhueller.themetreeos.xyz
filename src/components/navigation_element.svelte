<script>
  import { page } from "$app/stores";

  export let path = "/";
  export let name = "";
</script>


<a href={path} class={$page.url.pathname === path ? "active" : ""}>
  {#if (this.path !== "/")}
    <h3>{name}</h3>
  {:else}
    <!--img src="%sveltekit.assets%/logo.png" alt="maraldhueller logo"-->
  {/if}
</a>


<style>
  a:hover {
    background-color: #003f88;
  }

  a:link {
    text-decoration: inherit;
    color: inherit;
  }

  a:visited {
    text-decoration: inherit;
    color: inherit;
  }

  a {
    width: 100%;
  }

  .active {
    background-color: #003f88;
    cursor: pointer;
  }
</style>
