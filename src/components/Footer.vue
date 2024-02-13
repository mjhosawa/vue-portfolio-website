<template>
    <div class="bg-black z-99 px-28 relative bottom-0 left-0 right-0 mx-auto block">
        <div class="pt-6 pb-11 z-9 block max-w-1200 mx-auto relative">
            <!-- <a class="inline-block mx-w-full mb-16" href="#">
                <img class="mx-w-full inline-block align-middle" src="@/assets/img/logo.svg" width="50">
            </a> -->
            <div class="gap-x-5 gap-y-5 mb-10 flex">
                <a target="_blank" class="inline-block mx-w-full text-white" v-for="social in socials" :key="social.id"
                    :href="social.url"><img class="mx-w-full inline-block align-middle" :src="social.imgUrl" width="50"></a>
            </div>
            <div class="gap-x-5 gap-y-5 mb-4 flex">
            </div>
            <div class="flex justify-between px-2 py-2 text-white">
                <div class="">
                    © {{ new Date().getFullYear() + ' Mohammed Jhosawa ' + '. All Rights Reserved' }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const socials = [
    {
        id: 0,
        url: 'https://in.linkedin.com/in/mohammedjhosawa',
        imgUrl: './src/assets/img/linkedin.svg'
    },
    {
        id: 1,
        url: 'https://twitter.com/mohammedjhosawa',
        imgUrl: './src/assets/img/twitter.svg'
    },
    {
        id: 2,
        url: 'https://github.com/mjhosawa',
        imgUrl: './src/assets/img/github.svg'
    }
];

</script>