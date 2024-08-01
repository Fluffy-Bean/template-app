<script>
    import "./app.css";

    import { Acorn, Egg } from "phosphor-svelte";
    import TitleBar from "./lib/components/common/TitleBar.svelte";
</script>

<div class="absolute inset-0 overflow-hidden bg-stone-100 text-stone-900">
    <TitleBar></TitleBar>
    <div class="absolute top-10 right-0 bottom-0 left-0 overflow-auto p-2.5">
        <ul>
            <li class="last-of-type:mb-0 mb-2.5">
                <div class="rounded-lg border-2 border-stone-200 p-3.5">
                    <h2 class="text-xl font-bold text-stone-800">Section</h2>
                    <p class="text-stone-700">This is an example app for Wails + Svelte</p>
                </div>
            </li>
            <li class="last-of-type:mb-0 mb-2">
                <div class="rounded-lg border-2 border-stone-200 p-3.5">
                    <h2 class="mb-1 text-xl font-bold text-stone-800">Buttons</h2>

                    <ul>
                        <li class="last-of-type:mb-0 mb-2">
                            <button class="flex w-full items-center justify-center rounded border-0 bg-stone-200 px-4 py-2 text-sm font-bold text-stone-900 gap-1.5 hover:bg-stone-300 focus:outline-none">
                                Button<Acorn weight="fill" />
                            </button>
                        </li>
                        <li class="last-of-type:mb-0 mb-2">
                            <button class="flex w-full items-center justify-center rounded border-0 bg-amber-700 px-4 py-2 text-sm font-bold text-stone-100 gap-1.5 hover:bg-amber-800 focus:outline-none">
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
