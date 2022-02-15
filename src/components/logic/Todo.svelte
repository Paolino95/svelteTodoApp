<script>
    import todos from '../../store/todo.js';
    import categories from '../../store/categories.js';
    import { createEventDispatcher } from 'svelte';
    export let id;
    export let description;
    export let done;
    export let category;

    $: icon = $categories.find(cat => cat.label === category).icon;
    let dispatch = createEventDispatcher();

    function changeDonebehaviour() {
        todos.updateTodo({ id, data: { done: !done } });
    }

    function removeTodo() {
        todos.removeTodo(id);
    }

    function editTodo() {
        dispatch('editTodo', id);
    }
</script>

<li
    class="text-light-text relative dark:text-dark-text rounded border-2 border-solid 
border-light-decoration dark:border-dark-decoration p-4 m-2 xs:aspect-[3/2] sm:aspect-[4/3] aspect-[3/2] bg-light-content dark:bg-dark-content"
>
    <span>
        {description}
    </span>
    <i class="fa far fa-edit absolute bottom-4 left-4 icon" on:click={editTodo} />
    <div class="inline-flex absolute bottom-4 right-4">
        <i class="fa fas {icon} px-2" />
        <i
            class="fa icon"
            class:fa-check={done}
            class:fa-exclamation-circle={!done}
            on:click={changeDonebehaviour}
        />
        <i class="far fa-trash-alt icon" on:click={removeTodo} />
    </div>
</li>
