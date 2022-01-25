import { writable } from 'svelte/store';

const categories = writable([
    {
        id: Math.random(),
        label: 'game',
        icon: 'fa-gamepad',
    },
    {
        id: Math.random(),
        label: 'life',
        icon: 'fa-hands',
    },
    {
        id: Math.random(),
        label: 'gym',
        icon: 'fa-dumbbell',
    },
    {
        id: Math.random(),
        label: 'work',
        icon: 'fa-briefcase',
    },
]);

const categoriesManager = {
    subscribe: categories.subscribe,

    addCategory: category => categories.update(items => [...items, category]),

    removeCategory: id => categories.update(items => items.filter(i => i.id !== id)),
};

export default categoriesManager;
