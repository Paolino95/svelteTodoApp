<div class="scrollable h-full">
    <slot />
</div>

<style>
    .scrollable {
        overflow: scroll;

        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
    }

    .scrollable::-webkit-scrollbar {
        width: 0 !important;
    }
</style>
