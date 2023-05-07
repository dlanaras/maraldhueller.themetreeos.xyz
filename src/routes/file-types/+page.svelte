<script>
    import Header from '../../components/header.svelte'
    import Footer from '../../components/footer.svelte';
    import Loading from '../../components/loading.svelte';
    import { onMount } from 'svelte';

    let ready = false;

    onMount(() => ready = true)
</script>

{#if !ready}
    <Loading/>
{:else}
<Header/>
<div id="content">
    <div>
        <h2>Datei Formate</h2>
        <h3>Bild Formate</h3>
        <label for="complex image">Originale Bilder als jpg gespeichert</label>
        <div class="flex">
            <img src="fruit.jpg" alt="Wall">
            <img src="wall.jpg" alt="Fruit">
        </div>

        <label for="complex image">Bilder als png gespeichert</label>
        <div class="flex">
            <img src="fruit.png" alt="Fruit">
            <img src="wall.png" alt="Fruit">
        </div>
        <br>

        <label for="complex image">Bilder als gif gespeichert</label>
        <div class="flex">
            <img src="fruit.gif" alt="Fruit">
            <img src="wall.gif" alt="Fruit">
        </div>
        <br>

        <label for="complex image">Bilder als bmp gespeichert</label>
        <div class="flex">
            <img src="fruit.bmp" alt="Fruit">
            <img src="wall.bmp" alt="Fruit">
        </div>
        <br>

        <label for="complex image">Bilder mit extrem hohe jpg komprimierung</label>
        <div class="flex">
            <img src="fruit-lowres.jpg" alt="Fruit">
            <img src="wall-lowres.jpg" alt="Fruit">
        </div>
        <br>
    </div>
</div>
<Footer/>
{/if}

<style>
    img {
        width: 40%;
    }

    .flex {
        display: flex;
        justify-content: space-around;
    }
</style>