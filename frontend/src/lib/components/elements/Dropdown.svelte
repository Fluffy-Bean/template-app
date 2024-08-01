<script lang="ts">
    import { fly } from "svelte/transition";
    import { CaretUp } from "phosphor-svelte";

    export let open = false;
</script>

<div class="flex flex-col">
    <button class="flex h-9 w-full flex-row items-center justify-start gap-1 rounded bg-transparent px-3 hover:bg-stone-300 focus:outline-none" on:click={() => {open = !open}}>
        <slot name="header"></slot>
        <span class="ml-auto w-4 h-4 flex justify-center items-center transition-transform data-[open=true]:rotate-180" data-open={open}>
            <CaretUp weight="fill" />
        </span>
    </button>
    {#if open}
        <div class="mt-2" transition:fly={{ y: -5, duration: 150 }}>
            <slot name="body"></slot>
        </div>
    {/if}
</div>
