import Vue from 'vue'

// Vue.component('k-text-and-image', () => import("@weflocc/kata-text-and-image"))
// Vue.component('k-text-and-image', () => import("~/slices/k-text-and-image/src/k-text-and-image"))
Vue.component('k-text-and-image', () => import("~/components/text-and-image/k-text-and-image"))

//
Vue.component('k-footer', () => import("~/slices/kata-footer/src/k-footer"))


// import TextAndImage from '~/components/TextAndImage'
// import Page from '~/components/Page.vue'
// import Teaser from '~/components/Teaser.vue'
// import Grid from '~/components/Grid.vue'
// import Feature from '~/components/Feature.vue'

// Vue.component('blok-page', Page)
// Vue.component('blok-teaser', Teaser)
// Vue.component('blok-grid', Grid)
// Vue.component('blok-feature', Feature)

// Vue.component('text-content', TextAndImage)

// components: {
//   PersonList: () => import("~/components/PersonList"),
//     ActionTypeList: () => import("~/components/ActionTypeList"),
//     ArticleList: () => import("~/components/ArticleList"),
// },
