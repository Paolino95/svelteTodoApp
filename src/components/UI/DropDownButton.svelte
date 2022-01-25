<script>
    export let selections = {};
    export let title = '';
    export let value;

    function updateValue(event) {
        value = event.target.value;
    }
</script>

<div class="dropdown me-1">
    <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
    >
        {title}
    </button>
    <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
        {#each selections as selection (selection.id)}
            <li>
                <button
                    class="dropdown-item"
                    class:active={selection.label === value}
                    selected={selection.label === value}
                    value={selection.label}
                    on:click={updateValue}
                    >{selection.label}
                </button>
            </li>
        {/each}
        <li>
            <button
                class="dropdown-item"
                class:active={'Nessuna' === value}
                on:click={updateValue}
                value="Nessuna">Nessuna</button
            >
        </li>
    </ul>
</div>

<style lang="scss">
    @import 'style/dark_theme.scss';
    @import 'style/light_theme.scss';

    button {
        font: inherit;
        border: 1px solid #434150;
        background: $lightPrimary;
        padding: 0.5rem 1rem;
        color: $lightDecorations;
        border-radius: 5px;
        border-color: $lightDecorations;
        box-shadow: 1px 1px 3px $lightShadows;
        cursor: pointer;
        text-decoration: none;
    }

    .dropdown-menu {
        background: $lightPrimary;
        padding: 0 !important;
    }

    .dropdown-item {
        color: $lightDecorations;
        border: none !important;
        border-bottom: solid 0.5px $lightDecorations !important;
        border-radius: 2px;
    }

    .active {
        background-color: $lightDecorations !important;
        color: $lightPrimary;
    }

    button:focus {
        outline: none;
    }

    button:hover {
        background: $lightDecorations;
        border-color: $lightPrimary;
        box-shadow: 1px 1px 8px $lightShadows;
    }

    button:disabled,
    button:disabled:hover,
    button:disabled:active {
        background: #ccc;
        border-color: #ccc;
        color: #959595;
        box-shadow: none;
        cursor: not-allowed;
    }

    :global(body.dark) {
        button {
            border: 1px solid #434150;
            background: $darkPrimary;
            color: $darkDecorations;
            border-color: $darkDecorations;
            box-shadow: 1px 1px 3px $darkShadows;
        }
        .dropdown-menu {
            background: $darkPrimary;
        }
        .dropdown-item {
            color: $darkDecorations;
            border-bottom: solid 0.5px $darkDecorations !important;
        }
        .active {
            background-color: $darkDecorations !important;
            color: $darkPrimary;
        }
        button:hover {
            background: $darkDecorations;
            border-color: $darkPrimary;
            box-shadow: 1px 1px 8px $darkShadows;
            color: $darkPrimary;
        }
    }
</style>
