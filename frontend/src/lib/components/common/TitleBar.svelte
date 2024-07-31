<script lang="ts">
    import { WindowToggleMaximise, WindowFullscreen, Quit } from "../../../../wailsjs/runtime";
    import { Bookmark, ArrowsOutSimple, GearSix, Minus, X } from "phosphor-svelte";
</script>

<div class="pl-3 pr-2 w-full h-10 absolute top-0 left-0 flex flex-row justify-start items-center bg-stone-800" style="--wails-draggable: drag">
    <p class="flex flex-row justify-start items-center gap-2 text-stone-100 text-sm text-nowrap font-semibold font-IBMPlexMono pointer-events-none select-none">
        <span class="text-amber-700 text-lg"><Bookmark weight="duotone" /></span>
        Template App
    </p>

    <div class="flex-grow" />

    <ul class="flex flex-row justify-start items-center gap-1.5" style="--wails-draggable: no-drag">
        <li>
            <button class="text-stone-100 bg-transparent hover:bg-stone-700 focus:gb-stone-700 focus:outline-none w-7 h-7 flex justify-center items-center rounded-full" on:click={WindowToggleMaximise}>
                <GearSix weight="bold" />
            </button>
        </li>
        <li>
            <hr class="w-px h-7 mx-1 bg-stone-700 border-0">
        </li>
        <li>
            <button class="text-stone-100 bg-transparent hover:bg-stone-700 focus:gb-stone-700 focus:outline-none w-7 h-7 flex justify-center items-center rounded-full" on:click={WindowToggleMaximise}>
                <Minus weight="bold" />
            </button>
        </li>
        <li>
            <button class="text-stone-100 bg-transparent hover:bg-stone-700 focus:gb-stone-700 focus:outline-none w-7 h-7 flex justify-center items-center rounded-full" on:click={WindowFullscreen}>
                <ArrowsOutSimple weight="bold" />
            </button>
        </li>
        <li>
            <button class="text-stone-100 bg-transparent hover:bg-stone-700 focus:gb-stone-700 focus:outline-none w-7 h-7 flex justify-center items-center rounded-full" on:click={Quit}>
                <X weight="bold" />
            </button>
        </li>
    </ul>
</div>

<style></style>
