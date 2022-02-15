<script>
    export let selections = {};
    export let title = '';
    export let value;
</script>

<div class="flex mt-2">
    {#if title}
        <span class="p-2 sm:w-1/4 w-1/3 text-light-text dark:text-dark-text">{title}</span
        >
    {/if}
    <select
        class="sm:w-3/4 w-2/3 p-1
        bg-light-primary text-light-text border-2 border-light-decoration border-solid outline-none
        cursor-pointer rounded-md dark:border-dark-decoration dark:text-dark-text dark:bg-dark-primary "
        aria-label="Select component"
        bind:value
    >
        {#each selections as selection (selection.id)}
            <option
                class="!p-1 !border-b-2 !border-b-solid !border-b-light-decoration !text-opacity-0dark:border-b-dark-decoration"
                selected={selection.label === value}>{selection.label}</option
            >
        {/each}
    </select>
</div>
