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
    @import 'style/dark_theme.scss';
    @import 'style/light_theme.scss';

    li {
        background-color: $lightContent;
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
        color: $lightDecorations;
    }
    .fa-check {
        color: rgb(38, 224, 94);
    }
    .fa-exclamation-circle {
        color: $lightDecorations;
    }
    .fa-trash-alt {
        color: rgba(5, 32, 66, 0.425);
    }
    .fa-trash-alt:hover {
        color: $lightDecorations;
    }
    .category {
        color: $lightTextColor !important;
    }
    .list-group-item {
        color: $lightTextColor !important;
        border-radius: 3px !important;
        border: solid 1.5px $lightDecorations;
        padding: 15px;
        margin: 10px;
        height: 200px;
    }

    :global(body.dark) {
        li {
            background-color: $darkContent;
        }
        .fa-edit {
            color: $darkDecorations;
        }
        .fa-exclamation-circle {
            color: $darkDecorations;
        }
        .category {
            color: $darkTextColor !important;
        }
        .list-group-item {
            color: $darkTextColor !important;
            border: solid 1.5px $darkDecorations;
        }
        .fa-trash-alt:hover {
            color: $darkDecorations;
        }
    }
</style>
