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
        <h2>Film Projekt</h2>
        <h3>Cool RGB Video</h3>
        <video controls autoplay>
            <source src="cool-rgb-video.mp4" type="video/mp4">
            <track kind="captions">
        </video>
        <p>much wow such colour</p>
    </div>
</div>
<Footer/>
{/if}

<style>
    video {
        width: 100%;
    }
</style>