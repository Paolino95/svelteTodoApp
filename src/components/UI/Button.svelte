<script>
    export let type = 'button';
    export let mode = null;
    export let color = null;
    export let disabled;
</script>

<button
    class="border-2 border-solid border-light-decoration dark:border-dark-decoration
  bg-light-primary dark:bg-dark-primary p-2 text-light-text dark:text-dark-text rounded-md
    hover:bg-light-decoration hover:text-light-primary dark:hover:text-dark-primary dark:hover:bg-dark-decoration
    hover:!disabled:scale-110 transition duration-100 disabled:disabled
    cursor-pointer {mode} {color}"
    {type}
    {disabled}
    on:click
>
    <slot />
</button>
