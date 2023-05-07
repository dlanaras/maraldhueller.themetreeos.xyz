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
        <h2>Konzept</h2>
        <h3>Wireframes</h3>
        <p>Für die Desktop Ansicht dieser Website hatte ich ein minimalistisches Design geplant:</p>
        <img src="wireframe-m152-dimitrios.drawio.png" alt="desktop version wireframe">
        <br>

        <p>Da ich bisher nur Websites für PC-Benutzer erstellt hatte, wollte ich versuchen, auch eine Handy-Version zu erstellen:</p>
        <img src="wireframe-m152-mobile-dimitrios.drawio.png" alt="mobile version wireframe">
        <br>
        <h3>Zeitplanung</h3>
        <img src="zeitplan-dimitrios-lanaras-m152.png" alt="Zeitplan Dimitrios Lanaras m152">
    </div>
</div>
<Footer/>
{/if}

<style>
    img {
        max-width: 100%;
    }
</style>