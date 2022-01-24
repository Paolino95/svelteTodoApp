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

<li class="list-group-item">
    <span>
        {description}
    </span>
    <i class="fa far fa-edit icon px-2" on:click={editTodo} />
    <div class="d-inline-flex icons">
        <i class="fa fas category {icon}" />
        <i
            class="fa icon px-2"
            class:fa-check={done}
            class:fa-exclamation-circle={!done}
            on:click={changeDonebehaviour}
        />
        <i class="far fa-trash-alt icon" on:click={removeTodo} />
    </div>
</li>

<style lang="scss">
    @import 'style/variables.scss';

    li {
        background-color: $softGrey;
    }
    .icon {
        cursor: pointer;
    }
    .icons {
        position: absolute;
        bottom: 15px;
        right: 15px;
    }
    .fa-edit {
        position: absolute;
        bottom: 15px;
        left: 5px;
        color: $myYellow;
    }
    .fa-check {
        color: rgb(38, 224, 94);
    }
    .fa-exclamation-circle {
        color: $myYellow;
    }
    .fa-trash-alt {
        color: rgba(5, 32, 66, 0.425);
    }
    .category {
        color: $textColor !important;
    }
    .list-group-item {
        color: $textColor !important;
        border-radius: 3px !important;
        border: solid 1.5px $myYellow;
        padding: 15px;
        margin: 10px;
        height: 200px;
    }
</style>
