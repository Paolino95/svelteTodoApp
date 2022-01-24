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
    @import 'style/variables.scss';

    button {
        font: inherit;
        border: 1px solid #434150;
        background: $primaryTheme;
        padding: 0.5rem 1rem;
        color: $textColor;
        border-radius: 5px;
        border-color: $myYellow;
        box-shadow: 1px 1px 3px $shadows;
        cursor: pointer;
        text-decoration: none;
    }

    .dropdown-menu {
        background: $primaryTheme;
        padding: 0 !important;
    }

    .dropdown-item {
        color: $textColor;
        border: none !important;
        border-bottom: solid 0.5px $myYellow !important;
        border-radius: 2px;
    }

    .active {
        background-color: $myYellow !important;
    }

    button:focus {
        outline: none;
    }

    button:hover,
    button:active {
        background: $myYellow;
        border-color: $primaryTheme;
        box-shadow: 1px 1px 8px $shadows;
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
</style>
