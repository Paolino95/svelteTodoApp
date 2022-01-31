<script>
    export let image;
    export let title = '';
</script>

<header class="mb-4">
    <div class="flex p-1 w-full justify-between items-center">
        <h1 class="p-1 text-5xl italic font-medium text-light-text dark:text-dark-text">
            {title}
        </h1>
        <img class="w-28" src={image} alt="haeder_image" />
    </div>
    <div class="inline-flex w-full h-12 items-center justify-between">
        <div class="w-4/5 h-full"><slot name="slot1" /></div>
        <div class="w-1/5 ml-2 inline-flex justify-between">
            <div class="text-4xl"><slot name="slot2" /></div>
            <div class="text-4xl"><slot name="slot3" /></div>
        </div>
    </div>
    <div
        class="inline-flex w-full h-12 items-center mt-2 bg-light-content dark:bg-dark-content rounded-md"
    >
        <div class="w-1/3 mr-1"><slot name="slot4" /></div>
        <div class="w-1/3"><slot name="slot5" /></div>
    </div>
</header>
