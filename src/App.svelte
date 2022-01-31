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

    export let colorTheme = 'light';
    let searchFilter = '';
    let category = 'Nessuna';
    let showModal = false;

    let ordering = [
        { id: 0, label: 'data crescente' },
        { id: 1, label: 'data decrescente' },
    ];
    let order = 'Nessuna';

    onMount(() => todos.setTodos());

    $: editableTodo = {};
    $: filterTodos = sortTodos(
        $todos
            .filter(todo => todo.description.toLowerCase().includes(searchFilter))
            .filter(todo => {
                if (category !== 'Nessuna') {
                    return todo.category === category;
                } else return todo;
            })
    );

    $: editTodoTitle = Object.keys(editableTodo).length > 0 ? 'Edit' : 'Add';

    function editTodo(event) {
        let id = event.detail;
        editableTodo = getTodo(id);

        openModal();
    }

    $: sortTodos = array => {
        if (order === 'Nessuna') {
            return array;
        } else if (order === 'data crescente') {
            return array.sort((a, b) => {
                if (a.date > b.date) {
                    return 1;
                } else return -1;
            });
        } else {
            return array.sort((a, b) => {
                if (a.date < b.date) {
                    return 1;
                } else return -1;
            });
        }
    };

    function toggleColorMode() {
        if (colorTheme === 'dark') {
            colorTheme = 'light';
            document.body.classList.add('light', 'bg-light-primary');
            document.body.classList.remove('dark', 'bg-dark-primary');
        } else if (colorTheme === 'light') {
            colorTheme = 'dark';
            document.body.classList.add('dark', 'bg-dark-primary');
            document.body.classList.remove('light', 'bg-light-primary');
        }
    }

    $: colorThemeIcon = colorTheme === 'dark' ? 'fa-moon' : 'fa-sun';

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

<div class="container h-full relative max-w-2xl mx-auto px-1">
    <Header title="ToDo App" image={ModalImage}>
        <Input bind:value={searchFilter} slot="slot1" placeholder="Ricerca qui..." />
        <IconButton slot="slot2" icon="fa-plus-circle" on:click={openModal} />
        <div transition:fade slot="slot3">
            <IconButton icon={colorThemeIcon} on:click={toggleColorMode} />
        </div>
        <DropDownButton
            slot="slot4"
            title="Ordina Per"
            selections={ordering}
            bind:value={order}
        />
        <DropDownButton
            slot="slot5"
            title="Filtra per categoria"
            selections={$categories}
            bind:value={category}
        />
    </Header>

    {#if $todos.length > 0}
        <ul
            class="h-2/3 rounded border-b-solid border-b-2 border-b-light-decoration dark:border-b-dark-decoration"
        >
            <VerticalScroller>
                <div class="grid grid-cols-2 gap-5 justify-between p-4">
                    {#each filterTodos as todo (todo.id)}
                        <div
                            in:scale={{ delay: 550, duration: 500 }}
                            out:scale={{ delay: 50, duration: 250 }}
                            animate:flip={{ delay: 50, duration: 500 }}
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
