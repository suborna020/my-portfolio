<template>
<div>
<h2>user dashboard </h2>
<!-- {{user}} -->
</div>
</template>

<script>
export default {
    name: 'UserDashboard',
    computed: {
        user() {
            return this.$store.getter['user/getAuthUser']
        }
    },
    methods: {
        getUser() {
            this.$store.dispatch('user/getUser');
        }
    },
    created() {
        // page load nile akhaner function call hobe
        this.getUser();
    }

}
</script>

<style>

</style>
