<template>
    <v-container>
        <v-card class="px-6 py-4">
            <v-row>
                <v-col>id</v-col>
                <v-col>Usuario</v-col>
                <v-col>Nivel</v-col>
            </v-row>
            <v-row v-for="user in users" :key="user.id">
                <v-col>{{user.id}}</v-col>
                <v-col>{{user.name + " " + user.lastname}}</v-col>
                <v-col>{{user.level || "No especificado"}}</v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
<script>
import axios from "axios"

export default{
    data(){
        return{
            users: []
        }
    },
    created(){
        axios.get('http://localhost:3000/users', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            this.users = response.data
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>
