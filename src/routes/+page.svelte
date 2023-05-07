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
    <div class="img">
        <img src="hm-logo.jpg" alt="maraldhueller logo" width="512px">
        <h3>MaraldHueller</h3>
        <h3>.</h3>
        <h3>TheMeTreeOs</h3>
        <h3>.</h3>
        <h3>xyz</h3>
    </div>
</div>
<Footer/>
{/if}

<style>
    .img {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>