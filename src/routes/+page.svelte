<script>
    import Header from '../components/header.svelte'
    import Footer from '../components/footer.svelte';
    import Loading from '../components/loading.svelte';
    import { onMount } from 'svelte';

    let ready = false;

    onMount(() => ready = true)
</script>

<Header/>

{#if !ready}
    <Loading/>
{:else}
<div id="content">
    <div>
        <h2>Hauptseite</h2>
    </div>
    <div>
        <!--img src="%sveltekit.assets%/logo.png" alt="maraldhueller logo"-->
    </div>
</div>
<Footer/>
{/if}