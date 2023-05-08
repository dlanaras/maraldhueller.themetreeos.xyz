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
            <div>
                <img src="fruit.jpg" alt="Wall">
                <p>fruit.jpg 807.7kB</p>
            </div>
            <div>
                <img src="wall.jpg" alt="Fruit">
                <p>wall.jpg 2.0MB</p>
            </div>
        </div>
        <p>JPG/JPEG oder Joint Photographic Experts Group, ist die bekannteste Dateiformat und wird überall verwendet.
            Der Grund wieso diese Dateiformat so beliebt ist, liegt an dem es mit ganz kleine Dateigrössen qualitative Bilder speichern kann.
            Es hat jedoch 2 Nachteile und zwar hat es keine Transparenz Möglichkeiten und hat immer eine schlechtere Qualität als die Originale.
        </p>
        <br>

        <label for="complex image">Bilder als png gespeichert</label>
        <div class="flex">
            <div>
                <img src="fruit.png" alt="Fruit">
                <p>fruit.png 5.2MB</p>
            </div>
            <div>
                <img src="wall.png" alt="Fruit">
                <p>wall.png 9.0MB</p>
            </div>
        </div>
        <p>PNG oder Portable Network graphics wurden mit dem Zweck eine bessere Alternative zu GIF sein, entwickelt. Ihre Hauptnutzung ist bei qualitative Bilder mit Transparenz.
            Die APNG Variante unterstützt sogar Animationen. Das Grosste Nachteil der PNG Dateien ist die Dateigrösse.
        </p>
        <br>

        <label for="complex image">Bilder als gif gespeichert</label>
        <div class="flex">
            <div>
                <img src="fruit.gif" alt="Fruit">
                <p>fruit.gif 2.1MB</p>
            </div>
            <div>
                <img src="wall.gif" alt="Fruit">
                <p>wall.gif 3.8MB</p>
            </div>
        </div>
        <p>GIF oder Graphics Interchange Format ist verlustfrei, erlaubt Transparenz und erlaubt Animationen. Neben das Nachteil der höhe Bildgrösse haben GIFs nur 256 Farben.
            Sie werden am meisten für Animationen bei Websites verwendet.
        </p>
        <br>

        <label for="complex image">Bilder als bmp gespeichert</label>
        <div class="flex">
            <div>
                <img src="fruit.bmp" alt="Fruit">
                <p>fruit.bmp 14.4MB</p>
            </div>
            <div>
                <img src="wall.bmp" alt="Fruit">
                <p>wall.bmp 36.6MB</p>
            </div>
        </div>
        <p>
            BMPs oder Windows Bitmaps werden grösstenteils für Windows Icons verwendet. Es ist ein sehr simples Bildformat und existiert schon seit 1990.
            Da es eher ein veraltetes Dateiformat ist solltet man lieber Alternativen verwenden.
        </p>
        <br>

        <label for="complex image">Fruit.gif (Links) und Fruit.png (Recht) vergrössert (Nicht originalbilder sondern Screenshots davon)</label>
        <div class="flex">
            <div>
                <img src="fruit-gif-closeup.png" alt="Fruit">
                <p>fruit-gif-closeup.png 810.1kB</p>
            </div>
            <div>
                <img src="fruit-png-closeup.png" alt="Fruit">
                <p>fruit-png-closeup.png 558.6kB</p>
            </div>
        </div>
        <p>
            Beim Linken Bild kann man die Farben der einzelne Pixel sehen, da die Farbpalette einer GIF limitiert ist. Die Rechte ist ein PNG.
        </p>
        <br>

        <label for="complex image">Bilder mit extrem hohe jpg komprimierung</label>
        <div class="flex">
            <div>
                <img src="fruit-lowres.jpg" alt="Fruit">
                <p>fruit-lowres.jpg 807.7kB</p>
            </div>
            <div>
                <img src="wall-lowres.jpg" alt="Fruit">
                <p>wall-lowres.jpg 104.4kB</p>
            </div>
        </div>
        <br>
        <p>Die Qualität ist sehr slecht, aber beide Dateien sind nur kB gross.</p>
        <br>
        
        <h3>Video Formate</h3>
        <p>Das ist ein ganz normales Video das in FHD gedreht und als .mp4 gespeichert wurde. MP4 steht für MPEG-4 und MPEG steht für Moving Pictures Experts Group.
            Dieser ist der am meisten verbreiteter Video-Dateityp. Da es bei MP4 viel komprimiert werden darf kann man damit Videos mit sehr kleine Dateigrössen haben.
            MP4s erlauben ansonsten noch die Anwendung von Metadaten. Ein grosses Nachteil ist, dass es bei der Komprimierung immer Qualität verlieren wird (Abhängig von wie viel komprimiert wird).
        </p>
        <div class="video-flex">
            <video controls>
                <source src="cool-rgb-video.mp4"  type="video/mp4">
                <track kind="captions">
            </video> 
            <p>cool-rgb-video.mp4 18.6MB</p>
        </div>
        <p>Ogg kommt aus den Wort ogging, das ein Jargon aus dem Spiel Netrek ist (ogging bedeutet: einfach etwas tun ohne auf die zukunftige Resourcen zu achten).
            Es ist ein Open Source Container-Dateiformat (Mischt mehrere Datentypen zusammen, in diesem Fall Audio, Metadaten und Video). Es wird oft für Videos mit kleine Bit-Rates verwendet
            und vorallem bei Websites und Video-Games.
        </p>
        <div class="video-flex">
            <video controls>
                <source src="cool-rgb-video.ogv" type="video/ogg">
                <track kind="captions">
            </video> 
            <p>cool-rgb-video.ogv 2.4MB</p>
        </div>
        <p>Webm steh für Web Movie und ist ein neues Containerformat (2010) das von Google gesponsert wurde (wurde von On2, Wiph und Matroska entwickelt) und dient als Alternative zu MPEG.
            Wie schon bei der Name angetönt soll dies grösstenteils bei Websites verwendet werden. Ausserhalb von Webistes wird dieses Dateiformat nicht oft unterstützt und deswegen dafür nicht verwendet.
        </p>
        <div class="video-flex">
            <video controls>
                <source src="cool-rgb-video.webm"  type="video/webm">
                <track kind="captions">
            </video> 
            <p>cool-rgb-video.webm 6.8MB</p>
        </div>
    </div>
</div>
<Footer/>
{/if}

<style>
    img {
        width: 300px;
    }

    video {
        width: 50%;
    }

    .flex {
        display: flex;
        justify-content: space-around;
    }

    .flex div, .video-flex {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
</style>