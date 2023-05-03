<script>
    import Header from '../../components/header.svelte'
    import Footer from '../../components/footer.svelte';
    import Loading from '../../components/loading.svelte';
    import qa from './copyright-questions-and-answers.json';
    import { onMount } from 'svelte';

    let ready = false;

    onMount(() => ready = true);
</script>

{#if !ready}
    <Loading/>
{:else}
<Header/>
<div id="content">
    <div>
        <h2>Urheberechte</h2>
        <dl>
            {#each qa as questionAnswer}
                <dt>{questionAnswer.question}</dt>
                <dd>{questionAnswer.answer}</dd>
                <br>
            {/each}
        </dl>
        <h2>Lizenzen</h2>
    </div>
</div>
<Footer/>
{/if}