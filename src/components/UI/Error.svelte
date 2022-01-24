<script>
    export let errorDescription;
</script>

<span class="error">{errorDescription}</span>

<style lang="scss">
    @import 'style/variables.scss';

    .error {
        color: $myYellow;
        font-family: 'Courier New', Courier, monospace;
        font-size: medium;
        font-style: italic;
    }
</style>
