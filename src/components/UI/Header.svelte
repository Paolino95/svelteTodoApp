<script>
    export let image;
    export let title = '';
</script>

<header class="my-4">
    {#if image}
        <div class="d-flex p-1 w-100 justify-content-between align-items-center">
            <h1 class="p-1">{title}</h1>
            <img src={image} alt="haeder_image" />
        </div>
    {:else}
        <h1 class="mb-4">{title}</h1>
    {/if}
    <div class="d-inline-flex w-100 align-items-center justify-content-between">
        <slot name="slot1" />
        <slot name="slot2" />
        <slot name="slot3" />
    </div>
    <div class="d-inline-flex w-100 m-2 align-items-center">
        <slot name="slot4" />
        <slot name="slot5" />
    </div>
</header>

<style lang="scss">
    @import 'style/dark_theme.scss';
    @import 'style/light_theme.scss';

    img {
        width: 18%;
    }

    h1 {
        color: $lightDecorations;
    }

    :global(body.dark) {
        h1 {
            color: $darkTextColor;
        }
    }
</style>
