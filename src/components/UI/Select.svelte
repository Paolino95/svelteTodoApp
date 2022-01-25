<script>
    export let selections = {};
    export let title = '';
    export let value;
</script>

<div class="d-flex mt-2">
    {#if title}
        <span class="p-2 w-25">{title}</span>
        <select class="form-select" aria-label="Select component" bind:value>
            {#each selections as selection (selection.id)}
                <option selected={selection.label === value}>{selection.label}</option>
            {/each}
        </select>
    {:else}
        <select class="form-select" aria-label="Select component" bind:value>
            {#each selections as selection (selection.id)}
                <option selected={selection.label === value}>{selection.label}</option>
            {/each}
        </select>
    {/if}
</div>

<style lang="scss">
    @import 'style/dark_theme.scss';
    @import 'style/light_theme.scss';

    span {
        color: $lightTextColor;
    }
    select {
        background-color: $lightPrimary;
        color: $lightTextColor;
        border: solid 1.5px $lightDecorations;
        border-radius: 5px;
        cursor: pointer;
    }
    select > option {
        border-radius: 5px;
        border-bottom: solid 1.5px $lightDecorations;
    }

    .form-select:focus {
        box-shadow: 0 0 0 0.2rem $lightDecorations !important;
    }

    :global(body.dark) {
        span {
            color: $darkTextColor;
        }
        select {
            background-color: $darkPrimary;
            color: $darkTextColor;
            border: solid 1.5px $darkDecorations;
        }
        select > option {
            border-bottom: solid 1.5px $darkDecorations;
        }

        .form-select:focus {
            box-shadow: 0 0 0 0.2rem $darkDecorations !important;
        }
    }
</style>
