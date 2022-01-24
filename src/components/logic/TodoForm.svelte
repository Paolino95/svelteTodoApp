<script>
    import Input from '../UI/Input.svelte';
    import Select from './../UI/Select.svelte';
    import categories from '../../store/categories.js';

    export let todoDescription;
    export let category;
</script>

<div class="d-flex mt-2">
    <span class="p-2 w-25">Label</span>
    <Input bind:value={todoDescription} isInForm={true} />
</div>
<Select bind:value={category} title="Categories" selections={$categories} />

<style lang="scss">
    @import 'style/variables.scss';

    span {
        color: $textColor;
    }
</style>
