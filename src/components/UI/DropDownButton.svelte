<script>
    import { fade } from 'svelte/transition';
    export let selections = {};
    export let title = '';
    export let value;
    let showDropdownMenu = false;

    function updateValue(event) {
        value = event.target.value;
        showDropdownMenu = false;
    }

    function toggleDropDown() {
        showDropdownMenu = !showDropdownMenu;
    }
</script>

<div class="relative inline-block text-left w-full h-full">
    <div>
        <button
            type="button"
            class="btn-primary w-full h-full p-2 items-center"
            id={title}
            aria-expanded="true"
            aria-haspopup="true"
            on:click={toggleDropDown}
        >
            {title}
            <svg
                class="-mr-1 ml-2 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
    </div>
    {#if showDropdownMenu}
        <div
            in:fade={{ duration: 100 }}
            out:fade={{ duration: 100 }}
            class="absolute z-10 w-full rounded-b-md
            bg-light-content dark:bg-dark-content focus:outline-none border
            border-light-decoration dark:border-dark-decoration overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby={title}
            tabindex="-1"
        >
            <div class="flex flex-col">
                {#each selections as selection (selection.id)}
                    <button
                        class="dropdown-item"
                        class:activeItem={selection.label === value}
                        selected={selection.label === value}
                        value={selection.label}
                        on:click={updateValue}
                        >{selection.label}
                    </button>
                {/each}

                <button
                    class="dropdown-item rounded-b-md"
                    class:activeItem={'Nessuna' === value}
                    on:click={updateValue}
                    value="Nessuna"
                    >Nessuna
                </button>
            </div>
        </div>
    {/if}
</div>
