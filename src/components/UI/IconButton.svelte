<script>
    export let icon;
</script>

<i class="fa fas far {icon} icon iconbutton" on:click />

<style lang="scss">
    @import 'style/variables.scss';

    .iconbutton {
        width: 10%;
        cursor: pointer;
        color: $iconButtonsColor;
        font-size: 40px;
    }
    .iconbutton:hover {
        color: $myYellow;
    }
</style>
