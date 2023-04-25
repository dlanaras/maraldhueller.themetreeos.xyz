<script>
    import Header from '../../components/header.svelte'
    import Footer from '../../components/footer.svelte';
</script>

<style>
    #colourSquare {
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: row;
    }

    #colourSquare div {
        height: 100%;
        width: 25%;
        border: 2px solid black;
    }

    #colourSwaure div div {
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        visibility: none;
        color: black;
    }

    #colourSwaure div div:hover {
        transition: 0.5s ease;
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
</style>

<Header/>
<div>
    <div>
        <h2>Styleguide</h2>
    </div>
    <div>
        <h3>Wireframes</h3>
        <p>Für die Desktop Ansicht dieser Website hatte ich ein minimalistisches Design geplant:</p>
        <!--img src="%sveltekit.assets%/wireframe-m152-dimitrios.drawio.png" alt="desktop version wireframe"-->
        <br>

        <p>Da ich bisher nur Websites für PC-Benutzer erstellt hatte, wollte ich versuchen, auch eine Handy-Version zu erstellen:</p>
        <!--img src="%sveltekit.assets%/wireframe-m152-mobile-dimitrios.drawio.png" alt="mobile version wireframe"-->
        <br>

        <h3>Farbschema</h3>
        <p>Ich habe verschiedene Farbkombinationen ausprobiert, bis ich auf die blau-gelbe Kombination gekommen bin, die mich an Ikea erinnert hat. Solche Farbekombination zu verwenden fand ich lustig, also entschied ich mich für diese.</p>
        <div id="colourSquare">
            <div id="colourSquare-primary"><div>#003f88</div></div>
            <div id="colourSquare-secondary"><div>#00296b</div></div>
            <div id="colourSquare-alternative"><div>#fdc500</div></div>
            <div id="colourSquare-secondary-alternative"><div>#ffd500</div></div>
        </div>
        <br>

        <h3>Schriftart und -grösse</h3>
        <p>Schriftart: Noto-Sans-Mono-Regular</p>
        <!--div>List of font sizes used</div-->
        <br>

        <h3>Website Logo</h3>
        <!--img src="%sveltekit.assets%/logo.png" alt="maraldhueller logo"-->
        <p></p>
        <br>

        <h3>Icons und Hover-Effekte</h3>
        <!--div>List of icons</div-->
        <p></p>
        <!--div>List of Hover-Effekte</div-->
        <p></p>
        <br>

        <h3>Abstände</h3>
        <!--div>List of spaces used</div-->
        <p></p>
        <br>

        <h3>Styleguide Exemplar</h3>
        <!--TODO: add npm save-as package to prompt download-->
    </div>
</div>
<Footer/>