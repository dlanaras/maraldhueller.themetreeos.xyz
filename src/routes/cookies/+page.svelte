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
        <h2>DSGVO - Datenschutz-Grundverordnung und Cookies</h2>
        <h3>Was ist die DSGVO?</h3>
        <p>Ganz simpel regelt die DSGVO, was genau mit Endbenutzerdaten, die Firmen sammeln, alles gemacht werden kann.
           Alle diese Regeln müssen zumindest in der EU eingehalten werden, und bei Nichteinhaltung können gesetzliche Strafen folgen.
           Eines der vielen Dinge, die man nicht tun darf, ist die Verwendung der Daten einer Person ohne deren Zustimmung.
        </p>
        <h3>Wann muss ein Cookie-Banner auf einer Website verwendet werden?</h3>
        <p>Sobald man Cookies verwendet, die für die Funktionalität der Website nicht nötig sind (oder wenn das eine Bewertungskriterie ist für das Modul 152 ;) ).</p>
    </div>
</div>
<Footer/>
{/if}