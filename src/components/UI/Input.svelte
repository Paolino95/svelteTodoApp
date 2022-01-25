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
    @import 'style/dark_theme.scss';
    @import 'style/light_theme.scss';

    .isNotInForm {
        color: $lightTextColor;
        max-width: 600px;
        border: none;
        background: $lightShadows;
        padding: 10px;
    }

    .isInForm {
        color: $lightTextColor;
        background-color: $lightContent;
        max-width: 600px;
        border: none;
        border-bottom: solid 1px $lightDecorations !important;
        padding: 10px;
    }

    .form-control:focus {
        box-shadow: 0 0 0 0.2rem $lightDecorations !important;
    }

    :global(body.dark) {
        .isNotInForm {
            color: $darkTextColor;
            background: $darkShadows;
        }

        .isInForm {
            color: $darkTextColor;
            background-color: $darkContent;
            border-bottom: solid 1px $darkDecorations !important;
        }

        .form-control:focus {
            box-shadow: 0 0 0 0.2rem $darkDecorations !important;
        }
    }
</style>
