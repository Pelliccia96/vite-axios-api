<template>
    <section>
        <div class="my-alert text-white fw-bold p-3">Found {{store.paginationInfo.pages}} characters</div>
        <div v-if="(ajaxError !== '')" class="alert alert-danger mt-5">{{ajaxError}}</div>
        <div class="row row-cols-1 row-cols-md-5 g-4 mt-3">
            <div v-for="singleCharacter in store.charactersList" class="col">
                <div class="card bg-dark">
                    <img :src="singleCharacter.image" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title text-white">{{singleCharacter.name}}</h5>
                        <p class="card-text text-secondary">{{singleCharacter.status}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import { store } from "../store"

export default {
    data() {
        return {
            ajaxError: "",
            store,
        }
    },
    created() {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((resp) => {
                this.ajaxError = "";
                console.log(resp);
                this.store.charactersList = resp.data.results;
                console.log(resp.data.results)
                this.store.paginationInfo = resp.data.info;
                console.log(resp.data.info)
            })
            .catch((error) => {
                console.log(error);
                console.log("Codice errore: ", error.response.status);
                this.ajaxError = "Si sono verificati degli errori, impossibile caricare la pagina. / " + error;
            });
    },
}
</script>

<style scoped>
section {
    background-color: white;
    padding: 3rem;
}

section .my-alert {
    background-color: #212529;
}
</style>
