<script lang="ts">
    import Header from '../../components/header.svelte'
    import Footer from '../../components/footer.svelte';
    import Loading from '../../components/loading.svelte';
    import { onMount } from 'svelte';
    import saveAs from 'file-saver';

    let url = ``;

    onMount(() => url = window.location.origin);

    function promptDownload(file: string): void {
        saveAs(`${url}/${file}`, file); 
    }
</script>

{#if url === ""}
    <Loading/>
{:else}
<Header/>
<div id="content">
    <div>
        <h2>Reflexion</h2>
        <h3>Was habe ich neugelernt?</h3>
        Seit dem ich meine Applikationsentwickler Lehrstelle begonnen habe, habe ich schon mehrmals Websites gebaut und habe deswegen bei diesen Projekt Vieles schon gekonnt.
        Trotzdem könnte ich vieles über SVGs und CSS-Animationen neulernen, da ich damit nicht so oft gearbeitet hatte. Ausserdem habe ich das Framework Svelte zum ersten Mal verwendet
        und könnte jetzt zumindest die Basics davon kennen lernen.
        <h3>Testprotokoll</h3>
        <button on:click={() => promptDownload("Testprotokoll_m152_dimitrios.docx")}>Testprotokoll herunterladen</button>
    </div>
</div>
<Footer/>
{/if}