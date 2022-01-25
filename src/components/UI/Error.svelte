<script>
    export let errorDescription;
</script>

<span class="error">{errorDescription}</span>

<style lang="scss">
    @import 'style/dark_theme.scss';
    @import 'style/light_theme.scss';

    .error {
        color: $lightDecorations;
        font-family: 'Courier New', Courier, monospace;
        font-size: medium;
        font-style: italic;
    }

    :global(body.dark) {
        .error {
            color: $darkDecorations;
        }
    }
</style>
