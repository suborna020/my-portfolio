<template>

<!-- shop content section start -->
<div class="pages products-page section-padding text-center">
    <div class="container">
       
        <div class="row">
           <categories-row v-if="$route.name==null"></categories-row>

            <div  v-bind:class = "$route.name==null? 'col-xs-12 col-sm-8 col-md-10':' col-xs-12 col-sm-12 col-md-12'">
                <div class="right-products" >
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="section-title clearfix">
                                <ul>
                                 
                                    <li class="sort-by floatright">
                                        <!-- Showing 1-12 of 89 Results   -->
                                        Showing product List
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="grid-content">
                            <!-- <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="single-product">
                                    <div class="product-img">
                                        <div class="pro-type">
                                            <span>new</span>
                                        </div>
                                        <a href="#"><img src="img/products/9.jpg" alt="Product Title" /></a>
                                        <div class="actions-btn">
                                            <a href="#"><i class="mdi mdi-cart"></i></a>
                                            <a href="#" class="quickViewModal" data-toggle="modal" data-target="#quick-view"><i class="mdi mdi-eye"></i></a>
                                            <a href="#"><i class="mdi mdi-heart"></i></a>
                                        </div>
                                    </div>
                                    <div class="product-dsc">
                                        <p><a href="#">men’s Black t-shirt</a></p>
                                        <div class="ratting">
                                            <i class="mdi mdi-star"></i>
                                            <i class="mdi mdi-star"></i>
                                            <i class="mdi mdi-star"></i>
                                            <i class="mdi mdi-star-half"></i>
                                            <i class="mdi mdi-star-outline"></i>
                                        </div>
                                        <span>$65.20</span>
                                    </div>
                                </div>
                            </div> -->
                            <!-- single product end -->
                            <div v-for="products in productList" :key="products.id" class="col-xs-12 col-sm-6 col-md-3">
                                <div class="single-product">
                                    <div class="product-img">
                                        <div class="pro-type sell">
                                            <span>sell</span>
                                        </div>
                                        <a href="#"><img :src="products.image" alt="Product Title" /></a>
                                        <div class="actions-btn">
                                            <a href="#"><i class="mdi mdi-cart"></i></a>
                                            <a href="#" data-toggle="modal" data-target="#quick-view"><i class="mdi mdi-eye"></i></a>
                                            <a href="#"><i class="mdi mdi-heart"></i></a>
                                        </div>
                                    </div>
                                    <div class="product-dsc">
                                        <p><a href="#">{{products.name}}</a></p>
                                        <div class="ratting">
                                            <i class="mdi mdi-star"></i>
                                            <i class="mdi mdi-star"></i>
                                            <i class="mdi mdi-star"></i>
                                            <i class="mdi mdi-star-half"></i>
                                            <i class="mdi mdi-star-outline"></i>
                                        </div>
                                        <span>${{products.price}}</span>
                                    </div>
                                </div>
                            </div>
                            <!-- single product end -->

                           
                           
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="pagnation-ul">
                                <ul class="clearfix">
                                    <li><a href="#"><i class="mdi mdi-menu-left"></i></a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">...</a></li>
                                    <li><a href="#">10</a></li>
                                    <li><a href="#"><i class="mdi mdi-menu-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="col-xs-12">

</div> -->
        </div>
    </div>

</div>
<!-- shop content section end -->
</template>

<script>
import CategoriesRow from '../inc/CategoriesRow'

export default {
    name: 'Shop',
    components: {
        CategoriesRow
    },
    computed: {
       
        productList(){
            return this.$store.getters['productList/displayProductList']

        }
    }

}
</script>

<style>

</style>
