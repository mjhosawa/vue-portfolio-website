<template>
    <div
        class="sticky flex items-center justify-center z-50 min-h-10vh mt-0 px-12 bottom-auto left-0 right-0 border-b border-neutral-200/70 bg-neutral-50/80">
        <div class="flex items-center justify-between max-w-650 px-4 py-6 mx-auto z-9">
            <!-- <div class="flex flex-row items-center">
                <a class="mt-0 mx-w-full inline-block" href="/">
                    <img class="mx-w-full inline-block align-middle" src="@/assets/img/logo.svg" width="50">
                </a>
            </div> -->
            <div class="self-center">
                <div class="flex justify-end">
                    <div class="flex flex-row self-start">
                        <RouterLink :to="{ name: 'Home' }"
                            class="ml-8 transition-opacity font-medium text-neutral-600 duration-200">Home</RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex">
            <div class="hidden sm:flex">
                <a href="#" class="font-medium text-neutral-600"><button
                        class="flex cursor-pointer flex-row items-center justify-center gap-4">
                        <div
                            class="flex items-center justify-center rounded-full bg-lime-400 shadow-[0px_0px_0px_2px_rgba(17,17,17,1)] transition-shadow h-12 w-12 hover:shadow-[0px_0px_0px_2px_rgba(17,17,17,1),4px_4px_2px_rgba(17,17,17,1)]">
                            <img src="@/assets/img/right.svg" width="25">
                        </div>
                        <p text="Let's chat">Let's chat</p>
                    </button></a>
            </div>
        </div>
    </div>
</template>
