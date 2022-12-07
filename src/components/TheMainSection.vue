<template>
    <section>
        <div class="my-alert text-white fw-bold p-3">Found {{store.paginationInfo.count}} characters / Found {{store.paginationInfo.pages}} pages</div>
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
import { store, fetchCharacters } from "../store"

export default {
    data() {
        return {
            store,
        }
    },
    created() {
        fetchCharacters()
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
