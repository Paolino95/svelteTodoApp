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
    @import 'style/dark_theme.scss';
    @import 'style/light_theme.scss';

    button,
    a {
        font: inherit;
        border: 1px solid #434150;
        background: $lightPrimary;
        padding: 0.5rem 1rem;
        color: $lightTextColor;
        border-radius: 5px;
        box-shadow: 1px 1px 3px $lightShadows;
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
        background: $lightDecorations;
        border-color: $lightPrimary;
        box-shadow: 1px 1px 8px $lightShadows;
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

    :global(body.dark) {
        button,
        a {
            border: 1px solid #434150;
            background: $darkPrimary;
            color: $darkTextColor;
            box-shadow: 1px 1px 3px $darkShadows;
        }
        button:hover,
        button:active,
        a:hover,
        a:active {
            background: $darkDecorations;
            border-color: $darkPrimary;
            box-shadow: 1px 1px 8px $darkShadows;
        }
    }
</style>
