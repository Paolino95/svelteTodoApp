<script>
    export let image;
    export let title = '';
</script>

<header class="text-light my-4">
    {#if image}
        <div class="d-flex p-1 w-100 justify-content-between align-items-center">
            <h1 class="p-1">{title}</h1>
            <img src={image} alt="haeder_image" />
        </div>
    {:else}
        <h1 class="mb-4">{title}</h1>
    {/if}
    <div class="d-inline-flex w-100 align-items-center">
        <slot name="slot1" />
        <slot name="slot2" />
        <slot />
    </div>
</header>

<style>
    img {
        width: 20%;
    }
</style>
