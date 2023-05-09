<script lang="ts">
    import Header from '../../components/header.svelte'
    import Footer from '../../components/footer.svelte';
    import Loading from '../../components/loading.svelte';
    import Canvas from '../../components/canvas.svelte';
    import { onMount } from 'svelte';
    import Saos from "saos";

    let ready = false;


    onMount(() => {
        ready = true;
    });    



</script>

{#if !ready}
    <Loading/>
{:else}
<Header/>
<div id="content">
    <div>
        <h2>Animationen</h2>
        <h3>Transormation</h3>
        <img id="transform" width="100px" height="100px" alt="">
        <br>
        
        <h3>Translation</h3>
        <img id="translation" width="10px" height="10px" alt="">
        <br>
            
        <h3>Transition</h3>
            Bei dieser Website gibt es eine Transitions-Animation. Die ist die On:Click Animation beim Hamburger-Menu-Symbol (nur bei der Mobile-Ansicht verfügbar).
            Dabei wird von die Hamburger-Menu-SVG zu eine X-SVG gewechselt. Wenn man auf die X-SVG clickt passiert das Gegenteil. Da ist ansonsten noch eine Transition-Animationen
            die mit CSS gemacht wurde
            <br>
            <img id="transition" width="100px" height="100px" alt="">
        <br>

        <h3>SVG</h3>
        <p>Diese SVG Animation wird als die Seite noch am laden ist gezeigt</p>
        <Loading></Loading>

        <h3>Canvas</h3>
        <Canvas></Canvas>
        QR-Bild im Canvas
        <br>

        <h3>Selbst erstelltes GIF</h3>
        <img src="stickmanman.gif" alt="S T I C K M A N M A N">
        <p>Dies wurde mit GIMP gezeichnet und besteht aus 12 Bilder</p>
        <br>

        <h3>Scroll Animation</h3>
        <Saos animation={"from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
            <div><p>This text too cool</p></div>
        </Saos>
    </div>
</div>
<Footer/>
{/if}

<style>
    @keyframes translation {
        0% {
            transform: translateX(0%);
        }

        50% {
            transform: translateX(100%);
        }
        
        100% {
            transform: translateX(0%);
        }
    }

    @keyframes transform {
        0% {
            transform: scaleX(0%);
            transform: scaleY(0%);
        }

        50% {
            transform: scaleX(50%);
            transform: scaleY(50%);
        }

        100% {
            transform: scaleX(0%);
            transform: scaleY(0%);
        }
    }

    @keyframes transition {
        0% {
            opacity: 0%;
        }

        25% {
            opacity: 50%;
        }

        50% {
            opacity: 100%;
        }

        75% {
            opacity: 50%;
        }

        100% {
            opacity: 0%;
        }
    }

    @keyframes -global-from-left {
        0% {
            transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
            opacity: 1;
        }
        100% {
            transform: rotateX(0deg) translateX(0) skewX(0deg);
            opacity: 1;
        }
    }

    #translation {
        animation-name: translation;
        animation-iteration-count: infinite;
        animation-duration: 2s;
        background-color: #fdc500;
        width: 10%;
        height: 10%;
    }

    #transform {
        animation-name: transform;
        animation-iteration-count: infinite;
        animation-duration: 2s;
        background-color: #fdc500;
    }

    #transition {
        animation-name: transition;
        animation-iteration-count: infinite;
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        background-color: #fdc500;
    }
</style>