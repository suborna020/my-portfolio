<template>
<div id="public_master">
    <public-header></public-header>
    <slider-area v-if="$route.name==null"></slider-area>
    <public-bread-crum v-if="$route.name!=null"></public-bread-crum>
    <shop v-if="$route.name==null"></shop>

    <router-view v-else>
    </router-view>
    <public-footer></public-footer>
</div>
</template>

<script>
import PublicHeader from '../public/inc/PublicHeader'
import PublicFooter from '../public/inc/PublicFooter'
import PublicBreadCrum from '../public/inc/PublicBreadCrum'
import SliderArea from '../public/inc/SliderArea'

import Shop from './shop/Shop.vue'

export default {
    name: 'PublicMaster',
    components: {
        PublicHeader,
        PublicFooter,
        PublicBreadCrum,
        Shop,
        SliderArea
    },
   
}
</script>

<style>

</style>
