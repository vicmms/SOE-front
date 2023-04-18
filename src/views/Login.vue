<template>
    <div class="d-flex flex- column align-center justify-center h-100">
        <v-card
            class="mx-auto px-6 mt-n15"
            max-width="700"
            width="500"
            outlined
        >
            <v-card-title>Inicia sesión</v-card-title>
            <v-text-field
            v-model="credentias.user"
            label="Usuario"
            hide-details="auto"
            ></v-text-field>
            <v-text-field
            v-model="credentias.password"
            label="Contraseña"
            hide-details="auto"
            ></v-text-field>
            <v-card-actions>
                <v-btn
                depressed
                color="primary"
                @click="handleLogin()"
                >
                    Entrar
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>

import axios from "axios"
import router from '@/router';

export default {
    name: 'login',
    data(){
        return{
            credentias:{
                user: null,
                password: null
            }
        }
    },
    methods:{
        handleLogin () {
        axios.post('http://localhost:3000/login', { ...this.credentias })
            .then(response => {
            const { token } = response.data;
            localStorage.setItem('token', token);
            router.push('/users');
            })
            .catch(error => {
            console.error(error);
            });
        }
    }
}
</script>
