<script>
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
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
<div transition:fade={{ delay: 250, duration: 500 }} class="modal">
    <h1 class="text-3xl p-4 ml-2 font-serif italic text-light-text dark:text-dark-text">
        {title}
    </h1>
    <div class="modal-content">
        <slot />
    </div>
    <footer>
        <slot name="footer">
            <Button on:click={closeModal} disabled={false}>Close</Button>
        </slot>
    </footer>
</div>
