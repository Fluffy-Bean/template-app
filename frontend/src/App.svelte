<script>
    import "./app.css";

    import { Acorn, Egg } from "phosphor-svelte";
    import TitleBar from "./lib/components/common/TitleBar.svelte";
</script>

<div class="absolute inset-0 overflow-hidden bg-stone-100 text-stone-900 rounded-sm">
    <TitleBar></TitleBar>
    <div class="p-2 absolute top-10 left-0 bottom-0 right-0 overflow-auto">
        <ul>
            <li class="mb-2 last-of-type:mb-0">
                <div class="py-2.5 px-3.5 border-2 border-stone-200 rounded-md">
                    <h2 class="text-stone-800 font-bold text-xl">Section</h2>
                    <p class="text-stone-700">This is an example app for Wails + Svelte</p>
                </div>
            </li>
            <li class="mb-2 last-of-type:mb-0">
                <div class="py-2.5 px-3.5 border-2 border-stone-200 rounded-md">
                    <h2 class="text-stone-800 font-bold text-xl mb-1">Buttons</h2>

                    <ul>
                        <li class="mb-2 last-of-type:mb-0">
                            <button class="w-full flex justify-center items-center gap-1.5 font-bold text-stone-900 text-sm bg-stone-200 border-0 py-2 px-4 focus:outline-none hover:bg-stone-300 rounded">
                                Button<Acorn weight="fill" />
                            </button>
                        </li>
                        <li class="mb-2 last-of-type:mb-0">
                            <button class="w-full flex justify-center items-center gap-1.5 font-bold text-stone-100 text-sm bg-amber-700 border-0 py-2 px-4 focus:outline-none hover:bg-amber-800 rounded">
                                Button<Egg weight="fill" />
                            </button>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</div>

<style></style>
