<template>
<div class="container mt-5 Home">
    <div class="row py-5 transparentBackground">
        <div class="col-md-7 col-sm-12">
            <div class=" card mx-auto ">

                <div class="card-body pb-0">
                    <h2 class="card-title d-md-flex myname">Amena Akter <span class="font-weight-normal font-weight-light"><small> &nbsp; | (Suborna)</small> </span> </h2>
                    <div class="card-text mb-2" style="text-align: -webkit-center;">
                        <div class="animateWord">
                            <div>
                                <!--        Use classes 2,3, or 4 to match the number of words -->
                                <ul class="flip4">
                                    <li> Game lover </li>
                                    <li> Php Adorer</li>
                                    <li> Javascript Enthusiast</li>
                                    <li> FULL-STACK SOFTWARE ENGINEER </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contactIcon">
                    <a href="mailto:amzsuborna4@gmail.com" data-toggle="tooltip" data-placement="bottom" title="amzsuborna4@gmail.com" target="_blank"> <i class="fa fa-envelope fa-2x text-danger" aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com/suborna.ayaath.79" data-toggle="tooltip" data-placement="bottom" title="suborna.ayaath.79" target="_blank"><i class="fab fa-facebook-square fa-2x text-primary"> </i>
                    </a>
                    <a href="https://www.linkedin.com/in/amzsuborna4/" data-toggle="tooltip" data-placement="bottom" title="amzsuborna4" target="_blank"><i class="fab fa-linkedin fa-2x text-info"></i></a>
                    <a href="https://github.com/suborna020" data-toggle="tooltip" data-placement="bottom" title="suborna020" target="_blank"> <i class="fab fa-github-square fa-2x text-white"></i></a>
                </div>
            </div>

        </div>
        <div class="col-md-5 col-sm-12">
            <div class=" card  text-md-left">
                <div class="about-icon">
                    <div class="circle-shape"></div>
                    <img class="card-img-top profilePic mx-auto my-4" src="img/profilePic3.jpg" alt="Card image">
                </div>
            </div>

        </div>
    </div>
</div>
<div class=" animationContainer container-fluid">
<div id="PictureAnimation" class=" PictureAnimationCss">
    <img class="" src="img/cat.gif" alt="cat image">
</div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        // HelloWorld
    }
}
</script>
