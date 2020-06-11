<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">

            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Sign in</h1>
                <p class="text-xs-center">
                <router-link to="/register">Need an account?</router-link>

                <!-- <ul class="error-messages">
                <li>That email is already taken</li>
                </ul> -->

                <form> 
                    <fieldset class="form-group">
                        <input 
                            class="form-control form-control-lg" 
                            type="text" 
                            placeholder="Email"
                            v-model="email"
                        >
                    </fieldset>
                    <fieldset class="form-group">
                        <input 
                            class="form-control form-control-lg" 
                            type="password" 
                            placeholder="Password"
                            v-model="password"
                        >
                    </fieldset>
                    <button @click="login()" class="btn btn-lg btn-primary pull-xs-right">
                        Sign up
                    </button>
                </form>
            </div>

            </div>
        </div>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import users from '@/store/modules/users'

@Component
export default class extends Vue {
    email = ''
    password = ''

    login() {
        users.login({
            email: this.email,
            password: this.password
        })
        console.log(`Login.vue - 52 - login with email = ${this.email}`);
    }
}
</script>