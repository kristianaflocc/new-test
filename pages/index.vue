<template>
  <page>
    <template v-slot:main>
      <div>

        <component
          v-for="(slice, i) in pageContent.slices"
          :key="i"
          :is="slice.template"
          :sliceData="slice">
        </component>

      </div>

      <k-footer/>
    </template>

  </page>
</template>


<script>

    export default {

        head() {
            return {
                title: this.pageContent.page_title + ' - ' + 'nrml',
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    {hid: 'description', name: 'description', content: 'My custom description'}
                ]
            }
        },
        data() {
        },
        async asyncData({params, payload}) {
            let pageContent = await require(`~/assets/content/pages/Home.json`)
            return {
                pageContent
            }
        },
    }
</script>
