<template>
    <div class="main-wrapper">
        <component
                v-for="(slice, i) in pageContent.slices"
                :key="i"
                :is="slice.template"
                :sliceData="slice">
        </component>


    </div>
</template>


<script>
    export default {
        head() {
            return {
                title: this.pageContent.page_title ? this.pageContent.page_title : 'Kata site',
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    {hid: 'description', name: 'description', content: 'My custom description'}
                ]
            }
        },
        data() {
            return {
                pageContent: {}
            }
        },
        async asyncData({params, payload}) {
            let path = params.pathMatch ? params.pathMatch : 'Home'
            console.log('Path: ' + path)
            let pageContent = await require(`~/assets/content/pages/${path}.json`)
            console.log(params)
            return {
                pageContent
            }
        },
    }
</script>
