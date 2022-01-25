import { writable } from 'svelte/store';
import axios from 'axios';

const todos = writable([]);

const todosManager = {
    subscribe: todos.subscribe,

    setTodos: () => {
        axios
            .get('https://todoappsvelte-a3162-default-rtdb.firebaseio.com/todos.json')
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('An error occured, please try again');
                }

                if (res.data) {
                    return res.data;
                } else return [];
            })
            .catch(err => {
                console.log({ err });
            })
            .then(todosData => {
                let items = [];
                for (const key in todosData) {
                    items.push({ id: key, ...todosData[key] });
                }
                todos.set(items);
            });
    },

    addTodo: todo => {
        axios
            .post(
                'https://todoappsvelte-a3162-default-rtdb.firebaseio.com/todos.json',
                JSON.stringify(todo)
            )
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('An error occured, please try again');
                }

                return res.data;
            })
            .then(data => {
                const { category, date, description, done } = todo;
                todos.update(items => [
                    ...items,
                    { category, date: date.toJSON(), description, done, id: data.name },
                ]);
            })
            .catch(err => {
                console.log({ err });
            });
    },

    removeTodo: id => {
        axios
            .delete(
                `https://todoappsvelte-a3162-default-rtdb.firebaseio.com/todos/${id}.json/`
            )
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('An error occured, please try again');
                }
            })
            .then(() => todos.update(items => items.filter(i => i.id !== id)))
            .catch(err => {
                console.log({ err });
            });
    },

    updateTodo: updatedData => {
        const { id, data } = updatedData;

        axios
            .patch(
                `https://todoappsvelte-a3162-default-rtdb.firebaseio.com/todos/${id}.json/`,
                JSON.stringify(data)
            )
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('An error occured, please try again');
                }
            })
            .then(() => {
                todos.update(items => {
                    let editTodo = items.find(item => item.id === id);
                    let editTodoIndex = items.findIndex(item => item.id === id);

                    items[editTodoIndex] = { ...editTodo, ...data };
                    return items;
                });
            })
            .catch(err => {
                console.log({ err });
            });
    },
};

export default todosManager;
