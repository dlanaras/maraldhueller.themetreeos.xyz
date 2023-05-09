<script lang="ts">
  import { onMount } from "svelte";
    import QRCode from 'qrcode';

    let canvas: HTMLCanvasElement;

    onMount(() => {
        QRCode.toDataURL('https://maraldhueller.themetreeos.xyz/animations')
        .then((url: any) => {
            const ctx = canvas.getContext("2d");

            var img = new Image;
            img.onload = function() {
                ctx?.drawImage(img, 0, 0);
            }
            img.src = url;
        })
        .catch((err: any) => {
            console.error(err)
        })
    });
</script>

<canvas bind:this={canvas} width="200px" height="200px"></canvas>
<br>