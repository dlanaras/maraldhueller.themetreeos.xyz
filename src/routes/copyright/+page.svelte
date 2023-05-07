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
        <br>
        <h2>Lizenzen</h2>
        <h3>Was sind und bedeuten Copyrights im Internet und wer hat welche Copyrights auf Ihrem Internetauftritt</h3>
        <p>Einfach erklärt sagen Copyrights zu welche Person(en) ein Werk gehört. Wer welche Copyrights auf ihrem Internetauftritt hat werden gesetzlich reguliert.
            Eigene Werke auf seiner Website kann er durch Lizenzen regeln.</p>
        <br>
        <h3>Was sind und bedeuten Lizenzen im Internet?</h3>
        <p>Lizenzen sind kurzgesagt mehrere Nutzungs- oder Weiterverbreitungsregel für ein Produkt (z.B: Source Code eines Projekts oder Bilder). Diese sind im Internet besonders wichtig,
           da man damit regulieren kann wer was verwenden darf und wann. Ohne diesen wäre es möglich jedes Bild, Video und Quellen-Code im Internet, ohne die Bewilligung vom Urheber zu verwenden.</p>
        <br>
        <h3>Was ist public domain und fair use?</h3>
        <p>Public domain sind Werke, die keine Urheberrechteschutz haben (Entweder freiwilig oder ganz alte Werke, wie diese von William Shakespear). Also darf jeder diese verwenden.
           Beim fair use geht es, um bestimmte Sonderfälle, wo ein geschutztes Werk ohne autorisierung verwendet werden darf. Ein Beispiel davon ist für den Zweck der Kritik.
           Wäre die Anwendung/ Darstellung von geschutzte Werke für der Kritik völlig blockiert, wäre es nicht möglich die Meinung von Privatpersonen über das Werk zu kriegen (sondern nur das was der Urheber darstellen wollte)</p>
    </div>
</div>
<Footer/>
{/if}