<script lang="ts">
    import Header from '../../components/header.svelte';
    import Footer from '../../components/footer.svelte';
    import Loading from '../../components/loading.svelte';
    import saveAs from 'file-saver';
    import { onMount } from 'svelte';

    let url = ``;

    onMount(() => url = window.location.origin);

    function promptDownload(file: string): void {
        saveAs(`${url}/${file}`, file); //TODO: return file on nginx route /styleguide-template
    }
</script>

<style>
    #colourSquare {
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: row;
    }

    .colour {
        height: 100%;
        width: 25%;
        border: 2px solid black;
    }

    .colour div {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        visibility: hidden;
        background-color: #000000a0;
    }

    .colour:hover div {
        transition: 1s ease;
        visibility: visible;
    }

    #colourSquare-primary {
        background-color: #003f88;
    }

    #colourSquare-secondary {
        background-color: #00296b;
    }

    #colourSquare-alternative {
        background-color: #fdc500;
    }

    #colourSquare-secondary-alternative {
        background-color: #ffd500;
    }
 
    button:hover {
        background-color: #003f88;
        cursor: pointer;
    }
</style>

{#if url === ""}
    <Loading/>
{:else}
    <Header/>
    <div id="content">
        <div>
            <h2>Styleguide</h2>
        </div>
        <div>
            <h3>Farbschema</h3>
            <p>Ich habe verschiedene Farbkombinationen ausprobiert, bis ich auf die blau-gelbe Kombination gekommen bin, die mich an Ikea erinnert hat. Solche Farbekombination zu verwenden fand ich lustig, also entschied ich mich für diese.</p>
            <div id="colourSquare">
                <div id="colourSquare-primary" class="colour"><div>#003f88</div></div>
                <div id="colourSquare-secondary" class="colour"><div>#00296b</div></div>
                <div id="colourSquare-alternative" class="colour"><div>#fdc500</div></div>
                <div id="colourSquare-secondary-alternative" class="colour"><div>#ffd500</div></div>
            </div>
            <br>

            <h3>Schriftart und -Grösse</h3>
            <p>Schriftart: Noto-Sans-Mono-Regular</p>
            <p>Schriftgrössen: </p>
                <ul>
                    <li>Seiten-Überschrift: {'<h2>'} (1.5 em) </li>
                    <li>Navbar Überschriften und Seite Unterüberschrifte: {'<h3>'} (1.3 em)</li>
                    <li>DT-Elemente: 1.3em</li>
                    <li>P-Elemente und Text direkt im HTML: (1 em)</li>
                    <li>Footer Überschrifte: {'<h4>'} (1 em)</li>
                </ul>
            <br>

            <h3>Website Logo</h3>
            <img src="hm-logo.png" alt="maraldhueller logo" width="64px" height="64px">
            <p>Dieses Logo habe ich selbständig mit Krita gezeichnet und es verwendet die beide Farben: #003f88 und #fdc500, also die primäre (Blau) und die Sekundäre Farbe der Website (Gelb). Das Design vom Logo ist sehr minimalistisch, genau so wie dieser Website.</p>
            <br>

            <h3>Icons und Hover-Effekte</h3>
            <p>Für meine Website habe ich folgende Icons verwendet: </p>
            <ul>
                <li>Copyleft Symbol für Lizenz: 🄯</li>
            </ul>
            <p>Hover-Effekte, die ich verwendet habe sind folgende: </p>
            <ul>
                <li>Bei Buttons: cursor: pointer und Hintergrund-Farbe zu #003f88 wechseln</li>
                <li>Speziall für diese Seite bei den colourSquares: ausgeblendete Div-Elemente mit Schwarze Hintergrunde und den HEX-Wert der Farbe werden eingeblendet</li>
            </ul>
            <br>

            <h3>Abstände</h3>
            <p>Bei den verschiedenen Seiten werden h3-Elemente mit einen Br-Element getrennt. Die restliche Abstände werden implizit oder explizit mit Flexbox gemacht</p>
            <br>

            <h3>Styleguide Exemplar</h3>
            <button on:click={() => promptDownload("styleguide-template.html")}>Exemplar herunterladen</button>
            <button on:click={() => promptDownload("NotoSansMono-Regular.ttf")}>Schriftart herunterladen</button>
        </div>
    </div>
    <br>
    <Footer/>
{/if}