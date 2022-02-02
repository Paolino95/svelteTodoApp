<script>
    export let value;
    export let placeholder = '';
</script>

<input
    class="form-control h-full w-full sm:text-base text-xs"
    {placeholder}
    type="text"
    bind:value
/>
