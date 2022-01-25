<script>
    import { createEventDispatcher } from 'svelte';
    import Modal from '../UI/Modal.svelte';
    import TodoForm from './TodoForm.svelte';
    import Button from '../UI/Button.svelte';
    import todos from '../../store/todo.js';
    import Error from '../UI/Error.svelte';

    export let title;
    export let id;
    export let todoDescription = '';
    export let category = 'life';
    let dispatch = createEventDispatcher();

    $: semanticValidation = todoDescription !== '' && category !== '';
    $: haveAlreadyThisTodoDescription = $todos.filter(
        todo => todo.description.toLowerCase() === todoDescription.toLowerCase()
    );
    $: error = () => {
        if (haveAlreadyThisTodoDescription.length > 0) {
            let haveAlreadyThisCategory = false;
            for (const todo of haveAlreadyThisTodoDescription) {
                if (todo.category === category) {
                    haveAlreadyThisCategory = true;
                }
            }

            return haveAlreadyThisCategory;
        } else return false;
    };

    function handleSubmit() {
        if (!error() && !id) {
            todos.addTodo({
                done: false,
                description: todoDescription,
                category,
                date: new Date(),
            });

            todoDescription = '';
            category = 'life';
        } else if (!error() && id) {
            todos.updateTodo({
                id,
                data: { description: todoDescription, category },
            });

            todoDescription = '';
            category = 'life';
        }

        cancel();
    }

    function cancel() {
        dispatch('cancel');
    }
</script>

<Modal title="{title} Todo" on:closeModal={cancel}>
    <TodoForm bind:todoDescription bind:category />
    <div slot="footer" class="d-flex px-3 footer">
        {#if error() && !id}
            <Error errorDescription="Todo già presente !" />
        {/if}
        <div class="saveButton">
            <Button on:click={handleSubmit} disabled={!semanticValidation || error()}
                >{title} Todo</Button
            >
        </div>
    </div>
</Modal>

<style>
    .footer {
        position: absolute;
        bottom: 30px;
        right: 0px;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .saveButton {
        position: absolute;
        right: 15px;
    }
</style>
