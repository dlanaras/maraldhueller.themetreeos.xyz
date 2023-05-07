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
        <p>JPG/JPEG oder Joint Photographic Experts Group, ist die bekannteste Dateiformat und wird überall verwendet.
            Der Grund wieso diese Dateiformat so beliebt ist, liegt an dem es mit ganz kleine Dateigrössen qualitative Bilder speichern kann.
            Es hat jedoch 2 Nachteile und zwar hat es keine Transparenz Möglichkeiten und hat immer eine schlechtere Qualität als die Originale.
        </p>

        <label for="complex image">Bilder als png gespeichert</label>
        <div class="flex">
            <img src="fruit.png" alt="Fruit">
            <img src="wall.png" alt="Fruit">
        </div>
        <br>
        <p>PNG oder Portable Network graphics wurden mit dem Zweck eine bessere Alternative zu GIF sein, entwickelt. Ihre Hauptnutzung ist bei qualitative Bilder mit Transparenz.
            Die APNG Variante unterstützt sogar Animationen. Das Grosste Nachteil der PNG Dateien ist die Dateigrösse.
        </p>

        <label for="complex image">Bilder als gif gespeichert</label>
        <div class="flex">
            <img src="fruit.gif" alt="Fruit">
            <img src="wall.gif" alt="Fruit">
        </div>
        <br>
        <p>GIF oder Graphics Interchange Format ist verlustfrei, erlaubt Transparenz und erlaubt Animationen. Neben das Nachteil der höhe Bildgrösse haben GIFs nur 256 Farben.
            Sie werden am meisten für Animationen bei Websites verwendet.
        </p>

        <label for="complex image">Bilder als bmp gespeichert</label>
        <div class="flex">
            <img src="fruit.bmp" alt="Fruit">
            <img src="wall.bmp" alt="Fruit">
        </div>
        <br>
        <p>
            BMPs oder Windows Bitmaps werden grösstenteils für Windows Icons verwendet. Es ist ein sehr simples Bildformat und existiert schon seit 1990.
            Da es eher ein veraltetes Dateiformat ist solltet man lieber Alternativen verwenden.
        </p>

        <label for="complex image">Bilder mit extrem hohe jpg komprimierung</label>
        <div class="flex">
            <img src="fruit-lowres.jpg" alt="Fruit">
            <img src="wall-lowres.jpg" alt="Fruit">
        </div>
        <br>
        <p>Die Qualität ist sehr slecht, aber beide Dateien sind nur KB gross</p>
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