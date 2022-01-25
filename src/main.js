import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        colorTheme: document.body.classList.value,
    },
});

export default app;
