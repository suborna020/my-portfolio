<template>
<div class="col-xs-12 col-sm-4 col-md-2">
    <div class="sidebar left-sidebar">
        <div class="s-side-text">
            <div class="sidebar-title clearfix">
                <h4 class="floatleft">Categories </h4>

            </div>
            <div class="categories left-right-p">
                <ul id="accordion" class="panel-group clearfix">
                    <li class="panel">
                        <div data-toggle="collapse" data-parent="#accordion" data-target="#collapse1">
                            <div class="medium-a">
                                Women
                            </div>
                        </div>
                        <div class="panel-collapse collapse in" id="collapse1">
                            <div class="normal-a">
                                <a href="#">Men Bag</a>
                                <a href="#">Shoes</a>
                                <a href="#">Watch</a>
                                <a href="#">T-shirt</a>
                                <a href="#">shirt</a>
                            </div>
                        </div>
                    </li>
                    <li class="panel">
                        <div data-toggle="collapse" data-parent="#accordion" data-target="#collapse2">
                            <div class="medium-a">
                                Fashion
                            </div>
                        </div>
                        <div class="paypal-dsc panel-collapse collapse" id="collapse2">
                            <div class="normal-a">
                                <a href="#">Men Bag</a>
                                <a href="#">Shoes</a>
                                <a href="#">Watch</a>
                                <a href="#">T-shirt</a>
                                <a href="#">shirt</a>
                            </div>
                        </div>
                    </li>
                    <li class="panel">
                        <div data-toggle="collapse" data-parent="#accordion" data-target="#collapse3">
                            <div class="medium-a">
                                Accessories
                            </div>
                        </div>
                        <div class="paypal-dsc panel-collapse collapse" id="collapse3">
                            <div class="normal-a">
                                <a href="#">Men Bag</a>
                                <a href="#">Shoes</a>
                                <a href="#">Watch</a>
                                <a href="#">T-shirt</a>
                                <a href="#">shirt</a>
                            </div>
                        </div>
                    </li>
                    <li class="panel">
                        <div data-toggle="collapse" data-parent="#accordion" data-target="#collapse4">
                            <div class="medium-a">
                                Top Brands
                            </div>
                        </div>
                        <div class="paypal-dsc panel-collapse collapse" id="collapse4">
                            <div class="normal-a">
                                <a href="#">Men Bag</a>
                                <a href="#">Shoes</a>
                                <a href="#">Watch</a>
                                <a href="#">T-shirt</a>
                                <a href="#">shirt</a>
                            </div>
                        </div>
                    </li>
                    <!-- {{allCategories.name}} -->
                    <li class="panel" v-for="category in allCategories" :key="category.id">
                        <div data-toggle="collapse" data-parent="#accordion" v-bind:data-target="'#'+'collapseid'+category.id">
                            <div class="medium-a">
                                {{category.name}}
                            </div>
                        </div>
                        <div class="paypal-dsc panel-collapse collapse" v-bind:id="'collapseid'+category.id">
                            <div class="normal-a">

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="s-side-text">
            <div class="sidebar-title">
                <h4>price</h4>
            </div>
            <div class="range-slider clearfix">
                <form action="#" method="get">
                    <label><span>You range</span> <input type="text" id="amount" readonly=""></label>
                    <div id="slider-range" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                        <div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 19.6429%; width: 44.4643%;"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 19.6429%;"></span><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 64.1071%;"></span>
                    </div>
                </form>
            </div>
        </div>
        <div class="s-side-text">
            <div class="sidebar-title clearfix">
                <h4 class="floatleft">size</h4>

            </div>
            <div  class="size-select clearfix">
                <a href="#" v-for="size in jsonDatas.options.size"  :key="size.value">{{size.label}}</a>
                <!-- <a href="#">s</a>
                <a href="#">l</a>
                <a href="#">sl</a>
                <a href="#">xl</a> -->
            </div>
        </div>

        <div class="s-side-text">
            <div class="sidebar-title clearfix">
                <h4 class="floatleft">brands</h4>

            </div>
            <div class="brands-select clearfix">
                <ul>
                    <li>
                        <a href="#">Offset</a>
                        <a href="#">Ecko Untid</a>
                        <a href="#">Addidas</a>
                        <a href="#">Custo</a>
                        <a href="#">Guccies</a>
                    </li>
                    <li>
                        <a href="#">All</a>
                        <a href="#">Shoes</a>
                        <a href="#">Watch</a>
                        <a href="#">Color Full</a>
                        <a href="#">Best choice</a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import jsonData from '../../../common/store/modules/jsonData'
export default {
    name: 'CategoriesRow',
    data() {
        return {
            jsonDatas: jsonData
        }
    },

    methods: {

        AllCategoryList() {
            this.$store.dispatch('category/categoryAllList')
        }

    },
    created() {
        this.AllCategoryList();
    },
    computed: {
        allCategories() {
            return this.$store.getters['category/categoryList']
        }
    }
}
</script>

<style>

</style>
