<script>
    import Input from '../UI/Input.svelte';
    import Select from './../UI/Select.svelte';
    import categories from '../../store/categories.js';

    export let todoDescription;
    export let category;
</script>

<div class="flex mt-2">
    <span class="p-2 w-1/4 text-light-text dark:text-dark-text">Label</span>
    <Input bind:value={todoDescription} placeholder="Descrizione Todo..." />
</div>
<Select bind:value={category} title="Categories" selections={$categories} />
