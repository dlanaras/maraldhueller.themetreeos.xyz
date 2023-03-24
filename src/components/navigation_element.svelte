<script>
  import { page } from "$app/stores";

  export let path = "/";
  export let name = "m152";
</script>

<a href={path} class={$page.url.pathname === path ? "active" : ""}
  ><h3>{name}</h3></a
>

<style>
  a:hover {
    background-color: #003f88;
    cursor: pointer;
  }

  a:link {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
  }

  a:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
  }

  a {
    width: 100%;
  }

  .active {
    background-color: #003f88;
    cursor: pointer;
  }
</style>
