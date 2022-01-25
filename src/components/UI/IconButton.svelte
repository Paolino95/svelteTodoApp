<script>
    export let icon;
</script>

<i class="fa fas far {icon} icon iconbutton" on:click />

<style lang="scss">
    @import 'style/dark_theme.scss';
    @import 'style/light_theme.scss';

    .iconbutton {
        width: 10%;
        cursor: pointer;
        color: $lightIconButtons;
        font-size: 40px;
    }
    .iconbutton:hover {
        color: $lightDecorations;
    }

    :global(body.dark) {
        .iconbutton {
            color: $darkIconButtons;
        }
        .iconbutton:hover {
            color: $darkDecorations;
        }
    }
</style>
