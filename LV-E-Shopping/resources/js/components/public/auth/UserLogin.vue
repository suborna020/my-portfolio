<template>
<div>
    <section class="pages login-page section-padding">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="main-input padding60">
                        <div class="log-title">
                            <h3><strong> Customer Login</strong></h3>
                        </div>
                        <div class="login-text">
                            <div class="custom-input">
                                <p>If you have an account with us, Please log in!</p>
                                <form  method="post" @submit.prevent="userLogin()">
                                    <input type="email" v-model="form.email" name="email" placeholder="Email">
                                    <span class="text-danger" v-if="errors['email']">
                                        {{errors['email'][0]}}
                                    </span>
                                    <input type="password" v-model="form.password" name="password" placeholder="Password">
                                    <span class="text-danger" v-if="errors['password']">
                                        {{errors['password'][0]}}
                                    </span>
                                    <a class="forget" href="#">Forget your password?</a>
                                    <div class="submit-text">
                                        <button type="submit" class="btn  btn-small btn-primary">login</button>
                                   
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'UserLogin',
    data() {
        return {
            form: {},
            errors: {}

        }
    },
    methods: {
        userLogin() {
            // var self=this 
            // then data return er kono variable assecc a  this property use na kore self use kore neya better 
            axios.post('/login', this.form)
                .then((result) => {
                  console.log('from userLoginVue : ', result.data);
                localStorage.setItem('userLoggedIn',true)
                // localStorage.setItem('userInfo', JSON.stringify(result.data))

                this.$router.push({name:'UserDashboard'})
                // push= redirect to another component 
                }).catch((err) => {

                    this.errors = err.response.data.errors
                });
        }
        
    }
}
</script>

<style>

</style>
