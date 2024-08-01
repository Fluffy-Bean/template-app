<script>
    import "./app.css";

    import { Egg } from "phosphor-svelte";
    import { OnFileDrop } from "../wailsjs/runtime/runtime.js";
    import TitleBar from "./lib/components/common/TitleBar.svelte";
    import Dropdown from "./lib/components/elements/Dropdown.svelte";

    let file = "Waiting for file";
    OnFileDrop((x, y, paths) => {
        file = paths.join(", ");
    }, false);
</script>

<div class="absolute inset-0 overflow-hidden bg-stone-200 text-stone-900">
    <TitleBar></TitleBar>
    <div class="absolute top-10 right-0 bottom-0 left-0 overflow-auto p-2">
        <ul>
            <li class="last-of-type:mb-0 rounded-lg bg-stone-100 mb-2 p-3.5">
                <h2 class="text-xl font-bold text-stone-800">Section</h2>
                <p class="text-stone-700">This is an example app for Wails + Svelte + Tailwind + Phosphor!</p>
            </li>

            <li class="last-of-type:mb-0 mb-2 rounded-lg bg-stone-100 p-3.5">
                <h2 class="mb-1 text-xl font-bold text-stone-800">Buttons</h2>
                <ul>
                    <li class="last-of-type:mb-0 mb-2">
                        <button class="flex h-9 w-full items-center justify-center rounded border-0 bg-amber-700 px-4 text-sm font-bold text-stone-100 gap-1.5 hover:bg-amber-800 focus:outline-none">
                            Button<Egg weight="fill" />
                        </button>
                    </li>
                    <li class="last-of-type:mb-0 mb-2">
                        <button class="flex h-9 w-full items-center justify-center rounded border-0 bg-stone-200 px-4 text-sm font-bold text-stone-900 gap-1.5 hover:bg-stone-300 focus:outline-none">
                            Button
                        </button>
                    </li>
                    <li class="last-of-type:mb-0 mb-2">
                        <button class="flex h-9 w-full items-center justify-center rounded border-0 bg-transparent px-4 text-sm font-bold text-stone-800 gap-1.5 hover:bg-stone-300 focus:outline-none">
                            Button
                        </button>
                    </li>
                </ul>
            </li>

            <li class="last-of-type:mb-0 mb-2 rounded-lg bg-stone-100 p-3.5">
                <h2 class="mb-1 text-xl font-bold text-stone-800">Dropdowns</h2>
                <ul>
                    <li class="last-of-type:mb-0 mb-2">
                        <Dropdown>
                            <svelte:fragment slot="header">
                                <p class="text-sm font-bold text-stone-900">Dropdown 1</p>
                            </svelte:fragment>
                            <svelte:fragment slot="body">
                                <p>Dropdown body</p>
                            </svelte:fragment>
                        </Dropdown>
                    </li>
                    <li class="last-of-type:mb-0 mb-2">
                        <Dropdown>
                            <svelte:fragment slot="header">
                                <p class="text-sm font-bold text-stone-900">Dropdown 1</p>
                            </svelte:fragment>
                            <svelte:fragment slot="body">
                                <img
                                    class="block max-h-64 rounded max-w-64"
                                    src="/maned_wolf.jpg"
                                    alt="Maned Wolf licking cupcake"
                                />
                            </svelte:fragment>
                        </Dropdown>
                    </li>
                </ul>
            </li>

            <li class="last-of-type:mb-0 mb-2 rounded-lg bg-stone-100 p-3.5">
                <h2 class="mb-1 text-xl font-bold text-stone-800">Drag and Drop</h2>
                <p>{file}</p>
            </li>
        </ul>
    </div>
</div>
