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

<style lang="scss">
    @import 'style/variables.scss';

    .isNotInForm {
        color: $textColor;
        max-width: 600px;
        border: none;
        background: $shadows;
        padding: 10px;
    }

    .isInForm {
        color: $textColor;
        background-color: $softGrey;
        max-width: 600px;
        border: none;
        border-bottom: solid 1px $myYellow !important;
        padding: 10px;
    }

    .form-control:focus {
        box-shadow: 0 0 0 0.2rem $myYellow !important;
    }
</style>
