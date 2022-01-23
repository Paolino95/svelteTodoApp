<script>
    export let type = 'button';
    export let href = null;
    export let mode = null;
    export let color = null;
    export let disabled;
</script>

{#if href}
    <a {href}>
        <slot />
    </a>
{:else}
    <button class="{mode} {color}" {type} {disabled} on:click>
        <slot />
    </button>
{/if}

<style>
    button,
    a {
        font: inherit;
        border: 1px solid #434150;
        background: rgb(68, 68, 68);
        padding: 0.5rem 1rem;
        color: white;
        border-radius: 5px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
        cursor: pointer;
        text-decoration: none;
    }

    button:focus {
        outline: none;
    }

    button:hover,
    button:active,
    a:hover,
    a:active {
        background: rgba(255, 153, 0, 0.863);
        border-color: rgb(68, 68, 68);
        box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
    }

    button:disabled,
    button:disabled:hover,
    button:disabled:active {
        background: #ccc;
        border-color: #ccc;
        color: #959595;
        box-shadow: none;
        cursor: not-allowed;
    }
</style>
