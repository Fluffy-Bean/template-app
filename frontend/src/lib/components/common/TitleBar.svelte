<script lang="ts">
    import { WindowToggleMaximise, WindowMinimise, Quit } from "../../../../wailsjs/runtime";
    import { Bookmark, GearSix, Minus, CornersOut, X } from "phosphor-svelte";
    import TitleBarButton from "./TitleBarButton.svelte";
</script>

<div class="absolute top-0 left-0 z-50 flex h-10 w-full flex-row items-center justify-start bg-stone-800 pr-2 pl-3" style="--wails-draggable: drag" on:dblclick={WindowToggleMaximise}>
    <p class="pointer-events-none flex select-none flex-row items-center justify-start gap-2 text-sm font-semibold text-stone-100 text-nowrap font-IBMPlexMono">
        <span class="text-lg text-amber-700"><Bookmark weight="duotone" /></span>
        Template App
    </p>

    <div class="flex-grow" />

    <ul class="flex flex-row items-center justify-start gap-1.5" style="--wails-draggable: no-drag">
        <li>
            <TitleBarButton>
                <GearSix weight="bold" />
            </TitleBarButton>
        </li>
        <li>
            <hr class="mx-1 h-7 w-px border-0 bg-stone-700">
        </li>
        <li>
            <TitleBarButton on:click={WindowMinimise}>
                <Minus weight="bold" />
            </TitleBarButton>
        </li>
        <li>
            <TitleBarButton on:click={WindowToggleMaximise}>
                <CornersOut weight="bold" />
            </TitleBarButton>
        </li>
        <li>
            <TitleBarButton on:click={Quit}>
                <X weight="bold" />
            </TitleBarButton>
        </li>
    </ul>
</div>
