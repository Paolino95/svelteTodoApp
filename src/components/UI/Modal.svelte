<script>
    import { createEventDispatcher } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import Button from './Button.svelte';

    export let title;

    const dispatch = createEventDispatcher();

    function closeModal() {
        dispatch('closeModal');
    }
</script>

<div
    transition:fade={{ delay: 250, duration: 500 }}
    class="modal-backdrop"
    on:click={closeModal}
/>
<div transition:fly={{ y: 300, delay: 250, duration: 500 }} class="mymodal">
    <h1>{title}</h1>
    <div class="modal-content">
        <slot />
    </div>
    <footer>
        <slot name="footer">
            <Button on:click={closeModal} disabled={false}>Close</Button>
        </slot>
    </footer>
</div>

<style lang="scss">
    @import 'style/dark_theme.scss';
    @import 'style/light_theme.scss';

    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: $lightShadows;
        z-index: 10;
    }

    .mymodal {
        position: fixed;
        top: 25vh;
        left: 10%;
        width: 80%;
        max-height: 80vh;
        border-radius: 5px;
        z-index: 100;
        box-shadow: 0 2px 8px $lightShadows;
        height: 400px;
        overflow: hidden !important;
        background-color: $lightPrimary;
        border: solid 1.5px $lightDecorations;
    }

    h1 {
        padding: 1rem;
        margin-left: 5px;
        color: $lightTextColor;
        font-family: serif;
        font-style: italic;
    }

    .modal-content {
        padding: 1rem;
        background-color: transparent !important;
        border: none !important;
    }

    footer {
        padding: 1rem;
    }

    @media (min-width: 768px) {
        .mymodal {
            width: 35rem;
            left: calc(50% - 20rem);
        }
    }

    :global(body.dark) {
        .modal-backdrop {
            background: $darkShadows;
        }

        .mymodal {
            box-shadow: 0 2px 8px $darkShadows;
            background-color: $darkPrimary;
            border: solid 1.5px $darkDecorations;
        }

        h1 {
            color: $darkTextColor;
        }
    }
</style>
