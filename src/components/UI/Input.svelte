<script>
    export let isInForm = false;
    export let value;
    export let placeholder = '';
</script>

<input
    class="form-control {isInForm ? 'isInForm' : 'isNotInForm'}"
    {placeholder}
    type="text"
    bind:value
/>

<style>
    .isNotInForm {
        color: #fff;
        max-width: 600px;
        border: none;
        background: rgba(0, 0, 0, 0.2);
        padding: 10px;
    }

    .isInForm {
        color: white;
        background-color: rgb(107, 107, 107);
        max-width: 600px;
        border: none;
        border-bottom: solid 1px rgba(255, 153, 0, 0.863) !important;
        padding: 10px;
    }

    .form-control:focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.582) !important;
    }
</style>
