<template>
<nav id="nav" class="navbar navbar-light navbar-expand-lg navbar-light ">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->

    <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item">
                <router-link class="nav-link pb-0 active " :to="{name:'Home'}">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    Home</router-link>
                <div v-if="$route.name=='Home'" class="activeBar "></div>

            </li>
            <li class="nav-item">
                <router-link class="nav-link pb-0" :to="{name:'Experience'}">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                    Experience</router-link>
                <div v-if="$route.name=='Experience'" class="activeBar "></div>

            </li>
            <li class="nav-item">
                <router-link class="nav-link pb-0" :to="{name:'Projects'}">
                    <i class="fa fa-code" aria-hidden="true"></i>
                    Projects</router-link>
                <div v-if="$route.name=='Projects'" class="activeBar "></div>

            </li>
            <li class="nav-item">
                <router-link class="nav-link pb-0" :to="{name:'Skills'}">
                    <i class="fa fa-wrench" aria-hidden="true"></i>
                    Skills</router-link>
                <div v-if="$route.name=='Skills'" class="activeBar "></div>

            </li>
            <li class="nav-item">
                <router-link class="nav-link pb-0" :to="{name:'List'}">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    Education</router-link>
                <div v-if="$route.name=='Education'" class="activeBar "></div>

            </li>

        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a href="#" class="nav-link pb-0  ">
                    <i class="fas fa-cloud-sun " id="ClickBackground"></i>

                </a>
            </li>

        </ul>

    </div>
</nav>
</template>

<script>
export default {
    name: 'Header'

}
</script>

<style>

</style>
