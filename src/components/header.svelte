<script lang="ts">
  import { fly } from 'svelte/transition';
  import NavigationBar from "./navigation_bar.svelte";

  $: innerWidth = 0;

  let hideMobileNav = true;

  function isMobile(w: number) {
    return w <= 1000;
  }

  function flip() {
    hideMobileNav = !hideMobileNav;
  }
</script>

<svelte:window bind:innerWidth />

{#if isMobile(innerWidth)}
  <button on:click={flip} aria-label="Navbar Button">
    {#if hideMobileNav}
    <svg
      in:fly={{ y: -20 }}
      id= "burger"
      width="32px"
      height="32px"
      viewBox="0 0 12 12"
      enable-background="new 0 0 12 12"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <rect
          fill="#fdc500"
          height="1"
          width="11"
          x="0.5"
          y="5.5"
          class="top"
        />
        <rect
          fill="#fdc500"
          height="1"
          width="11"
          x="0.5"
          y="2.5"
          class="middle"
        />
        <rect
          fill="#fdc500"
          height="1"
          width="11"
          x="0.5"
          y="8.5"
          class="bottom"
        />
      </g>
    </svg>
    {:else}
    <svg
      in:fly={{ y: -20 }}
      id= "burger"
      width="32px"
      height="32px"
      viewBox="0 0 12 12"
      enable-background="new 0 0 12 12"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      ><polygon
        fill="#fdc500"
        points="12,0.7070313 11.2929688,0 6,5.2929688 0.7070313,0 0,0.7070313 5.2929688,6 0,11.2929688   0.7070313,12 6,6.7070313 11.2929688,12 12,11.2929688 6.7070313,6 "
      /></svg
    >
    {/if}
  </button>
  <NavigationBar hidden={hideMobileNav} isMobile={true} />
{:else}
  <NavigationBar isMobile={false} />
{/if}

<style>
  button {
    background-color: #00296b;
    width: 100%;
    border: 0 none #00296b;
    cursor: pointer;
  }

  button:hover {
    background-color: #003f88;
  }
</style>
