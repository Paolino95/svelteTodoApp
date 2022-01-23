<script>
    export let icon;
</script>

<i class="fa fas far {icon} icon iconbutton" on:click />

<style>
    .iconbutton {
        width: 10%;
        cursor: pointer;
        color: rgb(29, 29, 29);
        font-size: 40px;
    }
    .iconbutton:hover {
        color: rgba(255, 153, 0, 0.863);
    }
</style>
