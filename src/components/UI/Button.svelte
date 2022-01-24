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

<style lang="scss">
    @import 'style/variables.scss';

    button,
    a {
        font: inherit;
        border: 1px solid #434150;
        background: $primaryTheme;
        padding: 0.5rem 1rem;
        color: $textColor;
        border-radius: 5px;
        box-shadow: 1px 1px 3px $shadows;
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
        background: $myYellow;
        border-color: $primaryTheme;
        box-shadow: 1px 1px 8px $shadows;
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
