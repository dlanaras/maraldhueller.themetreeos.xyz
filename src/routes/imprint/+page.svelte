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
        <h2>Impressum</h2>
        <h3>Name: Dimitrios Lanaras</h3>
        <h3>Addresse: 8712 Stäfa Tödihof</h3>
        <h3>Email: dimitrios.lanaras@edu.tbz.ch</h3>
    </div>
</div>
<Footer/>
{/if}