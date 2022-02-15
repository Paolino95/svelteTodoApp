<script>
    export let value;
    export let placeholder = '';
</script>

<input class="form-control h-full w-full " {placeholder} type="text" bind:value />
