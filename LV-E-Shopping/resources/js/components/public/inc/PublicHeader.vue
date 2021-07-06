<template>
<div>
    <!-- {{displaySizeList}} for getting Global data, (the products size) from jsondata.json  data -->
    <!-- header section start -->
    <header class="header-one header-two header-page">
        <div class="header-top-two">
            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="middel-top">
                            <div class="left floatleft">
                                <p><i class="mdi mdi-clock"></i> {{user? user.name : ''}} Mon-Fri : 09:00-19:00  </p>
                               

                            </div>
                        </div>
                        <div class="middel-top clearfix">
                            <ul class="clearfix right floatright">
                                <!-- {{user}} -->
                               
                                    <li v-if="user && user.id">
                                    <a href="#"><i class="mdi mdi-account"></i></a>
                                    <ul>
                                        <!-- from router js  -->
                                        <li>
                                            <router-link :to="{name:'UserDashboard'}">My account</router-link>
                                        </li>
                                        <li>
                                            <a href="#" @click.prevent="userLogout()">Logout</a>
                                        </li>
                                        <!-- <li>
                                            <router-link to="/logout">logout link</router-link>
                                        </li> -->
                                        <!-- <li><a href="my-account.html">My account</a></li> -->
                                    </ul>
                                </li>
                                <li v-else>
                                    <a href="#"><i class="mdi mdi-account"></i></a>
                                    <ul>
                                        <!-- from router js  -->
                                        <li>
                                            <router-link to="/user-login">Login</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{name:'UserRegister'}">Register</router-link>
                                        </li>
                                        <!-- <li><a href="my-account.html">My account</a></li> -->
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><i class="mdi mdi-settings"></i></a>
                                    <ul>
                                        <li>  <router-link :to="{name:'UserDashboard'}">My account</router-link></li>
                                          

                                        <li><router-link :to="{name:'Cart'}">Cart</router-link></li>
                                        <li>
                                        <router-link :to="{name:'Wishlist'}">My wishlist</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{name:'Checkout'}">Check out</router-link>

                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="right floatright">
                                <form action="#" method="get" @submit.prevent="example()">
                                    <button type="submit"><i class="mdi mdi-magnify"></i></button>
                                    <input type="text" placeholder="Search within these results..." />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container text-center">
            <div class="row">
                <div class="col-sm-2">
                    <div class="logo">
                        <!-- <a href="index.html"><img src="/img/logo2.png" alt="Sellshop" /></a> -->
                        <router-link to="/"><img src="/img/logo1.jpg" alt="logo" /></router-link>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="header-middel">
                        <div class="mainmenu">
                            <nav>
                                <ul>
                                        <li><router-link to="/">Home</router-link></li>

                                    <li><router-link :to="{name:'Cart'}">Cart</router-link>
                                        <ul class="dropdown">
                                           
                                              <li><router-link :to="{name:'Shop'}">Home version one</router-link>
                                                <li><router-link :to="{name:'Shop'}">Home version two</router-link>
                                                    <!-- <a href="index-2.html">Home version two</a> -->
                                                </li>
                                        </ul>
                                    </li>
                                    <li><router-link :to="{name:'Shop'}">Shop</router-link>

                                        <ul class="magamenu">
                                            <li class="banner"><a href="shop.html"><img src="/img/maga1.png" alt="" /></a></li>
                                            <li>
                                                <h5>men’s wear</h5>
                                                <ul>
                                                    <li><a href="#">Shirts & Top</a></li>
                                                    <li><a href="#">Shoes</a></li>
                                                    <li><a href="#">Dresses</a></li>
                                                    <li><a href="#">Shemwear</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                    <li><a href="#">Sweaters</a></li>
                                                    <li><a href="#">Jacket</a></li>
                                                    <li><a href="#">Men Watch</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h5>women’s wear</h5>
                                                <ul>
                                                    <li><a href="#">Shirts & Tops</a></li>
                                                    <li><a href="#">Shoes</a></li>
                                                    <li><a href="#">Dresses</a></li>
                                                    <li><a href="#">Shemwear</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                    <li><a href="#">Sweaters</a></li>
                                                    <li><a href="#">Jacket</a></li>
                                                    <li><a href="#">Women Watch</a></li>
                                                </ul>
                                            </li>
                                            <li class="banner"><a href="shop.html"><img src="/img/maga2.png" alt="" /></a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Pages</a>
                                        <ul class="dropdown">
                                            <li><router-link :to="{name:'Wishlist'}">Wishlist</router-link></li>
                                            <li><router-link :to="{name:'Checkout'}">Check out</router-link></li>
                                            <li><router-link :to="{name:'Cart'}">Cart</router-link></li>
                                            <li><router-link :to="{name:'Shop'}">Product Grid View</router-link></li>

                                            <li><router-link :to="{name:'404'}">404</router-link></li>
                                        </ul>
                                    </li>
                               
                                    <li><router-link :to="{name:'About'}">About</router-link></li>
                                    <li><router-link :to="{name:'Category'}">Categories</router-link></li>
                                </ul>
                            </nav>
                        </div>
                        <!-- mobile menu start -->
                        <div class="mobile-menu-area">
                            <div class="mobile-menu">
                                <nav id="dropdown">
                                    <ul>
                                        <li><router-link to="/">Home</router-link></li>

                                        <li><router-link :to="{name:'Cart'}">Cart</router-link>
                                            <ul class="dropdown">
                                                <li><router-link :to="{name:'Shop'}">Home version one</router-link>
                                                    <!-- <a href="index.html">Home version one</a></li> -->
                                                <li><router-link :to="{name:'Shop'}">Home version two</router-link>
                                                    <!-- <a href="index-2.html">Home version two</a> -->
                                                </li>
                                            </ul>
                                        </li>
                                        <li><router-link :to="{name:'Shop'}">Shop</router-link>

                                            <ul>
                                                <li>
                                                    <h5>men’s wear</h5>
                                                    <ul>
                                                        <li><a href="#">Shirts & Top</a></li>
                                                        <li><a href="#">Shoes</a></li>
                                                        <li><a href="#">Dresses</a></li>
                                                        <li><a href="#">Shemwear</a></li>
                                                        <li><a href="#">Jeans</a></li>
                                                        <li><a href="#">Sweaters</a></li>
                                                        <li><a href="#">Jacket</a></li>
                                                        <li><a href="#">Men Watch</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <h5>women’s wear</h5>
                                                    <ul>
                                                        <li><a href="#">Shirts & Tops</a></li>
                                                        <li><a href="#">Shoes</a></li>
                                                        <li><a href="#">Dresses</a></li>
                                                        <li><a href="#">Shemwear</a></li>
                                                        <li><a href="#">Jeans</a></li>
                                                        <li><a href="#">Sweaters</a></li>
                                                        <li><a href="#">Jacket</a></li>
                                                        <li><a href="#">Women Watch</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Pages</a>
                                            <ul>
                                                <li><router-link :to="{name:'Wishlist'}">Wishlist</router-link></li>
                                                <li>
                                                    <router-link :to="{name:'Checkout'}">Check out</router-link>
                                                </li>
                                                <li><router-link :to="{name:'Cart'}">Cart</router-link></li>
                                                <li><a href="product-grid.html">Product Grid View</a></li>
                                                <li><a href="product-list.html">Product List View</a></li>
                                                <li><a href="single-product.html">Single Product</a></li>
                                                <li><router-link :to="{name:'404'}">404</router-link></li>
                                            </ul>
                                        </li>
                                       
                                        <li><router-link :to="{name:'About'}">About</router-link></li>
                                        <li><router-link :to="{name:'Category'}">Category</router-link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="cart-itmes">
                        <a class="cart-itme-a" href="cart.html">
                            <i class="mdi mdi-cart"></i>
                            02 items : <strong>$86.00</strong>
                        </a>
                        <div class="cartdrop">
                            <div class="sin-itme clearfix">
                                <i class="mdi mdi-close"></i>
                                <a class="cart-img" href="cart.html"><img src="/img/cart/1.png" alt="" /></a>
                                
                                <div class="menu-cart-text">
                                    <a href="#">
                                        <h5>men’s black t-shirt</h5>
                                    </a>
                                    <span>Color : Black</span>
                                    <span>Size : SL</span>
                                    <strong>$122.00</strong>
                                </div>
                            </div>
                            <div class="sin-itme clearfix">
                                <i class="mdi mdi-close"></i>
                                <a class="cart-img" href="cart.html"><img src="/img/cart/2.png" alt="" /></a>
                                <div class="menu-cart-text">
                                    <a href="#">
                                        <h5>men’s black t-shirt</h5>
                                    </a>
                                    <span>Color : Black</span>
                                    <span>Size : SL</span>
                                    <strong>$132.00</strong>
                                </div>
                            </div>
                            <div class="total">
                                <span>total <strong>= $306.00</strong></span>
                            </div>
                            <!-- <a  href="cart.html">go to cart</a> -->
                            <router-link class="goto" :to="{name:'Cart'}">go to cart</router-link>
                            <!-- <a class="out-menu" href="checkout.html">Check out</a> -->
                            <router-link class="out-menu" :to="{name:'Checkout'}">Check out</router-link>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- header section end -->
</div>
</template>

<script>
export default {
    name: 'PublicHeader',
   
    methods: {
        getUser() {
            this.$store.dispatch('user/getUser');
            // "user/getUser" = 
            // 'user' route prefix ,
            //  /getUser holo user.js > action() function under >getUser()
        },
        userLogout() {
            this.$store.dispatch('user/userLogout');
            localStorage.removeItem('userLoggedIn')
            // localStorage.removeItem('userInfo')

            this.$router.push({
                name: 'UserLogin'
            });
            this.$message({
                message: 'User Logout successfull',
                type: 'success'
            });

        }
    },
    computed: {
        user() {
            // view file ai  {{user}} likhe data print hobe 
            return this.$store.getters['user/getAuthUser']
            // getauthuser= user.js page  function
        },
        displaySizeList(){
            return this.$store.getters['size/displaySize']

        }
    },
    created() {
        this.getUser();
    }

}
</script>

<style>

</style>
