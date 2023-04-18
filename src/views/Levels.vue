<template>
    <v-container>
        <v-card class="px-6 py-4">
            <v-row>
                <v-col>id</v-col>
                <v-col>Nivel</v-col>
            </v-row>
            <v-row v-for="level in levels" :key="level.id">
                <v-col>{{level.id}}</v-col>
                <v-col>{{level.level}}</v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
<script>
import axios from "axios"

export default{
    data(){
        return{
            levels: []
        }
    },
    created(){
        axios.get('http://localhost:3000/levels', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            this.levels = response.data
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>
