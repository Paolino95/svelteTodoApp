<script>
    import todos from './store/todo.js';
    import categories from './store/categories.js';
    import Todo from './components/logic/Todo.svelte';
    import Input from './components/UI/Input.svelte';
    import Header from './components/UI/Header.svelte';
    import IconButton from './components/UI/IconButton.svelte';
    import VerticalScroller from './components/UI/VerticalScroller.svelte';
    import DropDownButton from './components/UI/DropDownButton.svelte';
    import EditTodo from './components/logic/EditTodo.svelte';
    import Error from './components/UI/Error.svelte';
    import ModalImage from './../public/Todo.png';

    import { scale, fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { onMount } from 'svelte';

    let searchFilter = '';
    let category = 'Nessuna';
    let showModal = false;

    onMount(() => todos.setTodos());

    $: editableTodo = {};
    $: filterTodos = $todos
        .filter(todo => todo.description.toLowerCase().includes(searchFilter))
        .filter(todo => {
            if (category !== 'Nessuna') {
                return todo.category === category;
            } else return todo;
        });
    $: editTodoTitle = Object.keys(editableTodo).length > 0 ? 'Edit' : 'Add';

    function editTodo(event) {
        let id = event.detail;
        editableTodo = getTodo(id);

        openModal();
    }

    function getTodo(id) {
        return $todos.find(todo => todo.id === id);
    }

    function openModal() {
        showModal = true;
    }

    function closeModal() {
        showModal = false;
        editableTodo = {};
    }
</script>

<div class="container">
    <Header title="ToDo App" image={ModalImage}>
        <div slot="slot1" class="m-2 input">
            <Input
                bind:value={searchFilter}
                isInForm={false}
                placeholder="Ricerca qui..."
            />
        </div>
        <div slot="slot2" class="dropdown">
            <DropDownButton
                title="Filtra per categoria"
                selections={$categories}
                bind:value={category}
            />
        </div>
        <IconButton icon="fa-plus-circle" on:click={openModal} />
    </Header>

    {#if $todos.length > 0}
        <ul class="list-group text-light">
            <VerticalScroller>
                <div class="row justify-content-between">
                    {#each filterTodos as todo (todo.id)}
                        <div
                            class="todo"
                            transition:scale={{ duration: 500 }}
                            animate:flip={{ duration: 500 }}
                        >
                            <Todo
                                id={todo.id}
                                description={todo.description}
                                done={todo.done}
                                category={todo.category}
                                on:editTodo={editTodo}
                            />
                        </div>
                    {/each}
                </div>
            </VerticalScroller>
        </ul>
    {:else}
        <div in:fade={{ delay: 550 }}>
            <Error errorDescription="Aggiungi il tuo primo ToDo !" />
        </div>
    {/if}
</div>

{#if showModal}
    <EditTodo
        todoDescription={editableTodo.description}
        category={editableTodo.category}
        id={editableTodo.id}
        title={editTodoTitle}
        on:cancel={closeModal}
    />
{/if}

<style>
    .container {
        max-width: 600px;
    }
    .list-group {
        max-height: 600px;
        border-bottom: solid 1.5px rgba(255, 153, 0, 0.863);
    }
    .row {
        margin: 0 !important;
    }
    .dropdown {
        width: 40%;
    }
    .input {
        width: 55%;
    }
    .todo {
        width: 285px !important;
    }
</style>
