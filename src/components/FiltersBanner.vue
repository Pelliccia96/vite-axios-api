<template>
    <form action="" class="mb-4 text-white fw-semibold" @submit.prevent="onSearchClick">
        <div class="row">
            <div class="col-sm-6">
                <div class="mb-3">
                    <label class="mb-1">Nome</label>
                    <input type="text" class="form-control" name="name" v-model="filters.name">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="mb-3">
                    <label class="mb-1">Stato</label>
                    <input type="text" class="form-control" name="status" v-model="filters.status">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <div class="mb-3">
                    <label class="mb-1">Specie</label>
                    <input type="text" class="form-control" name="species" v-model="filters.species">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="mb-3">
                    <label class="mb-1">Tipo</label>
                    <input type="text" class="form-control" name="type" v-model="filters.type">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="mb-3">
                    <label class="mb-1">Genere</label>
                    <input type="text" class="form-control" name="gender" v-model="filters.gender">
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button class="btn btn-info fw-bold">Cerca</button>
        </div>
    </form>
    <div class="alert alert-info fw-semibold">
        Sono stati trovati {{ store.paginationInfo.count }} elementi.
        Stai visualizzando la pagina 1 di {{ store.paginationInfo.pages }}
    </div>
    <div class="alert alert-info">
        <h3>Statistiche</h3>
        <div class="row">
            <div class="col">
                <ul>
                    <li><strong>Num. specie:</strong> {{ speciesList.length }}
                        <ul>
                            <li v-for="specie in speciesList">{{ specie }}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="col">
                <ul>
                    <li><strong>Num. stati:</strong> {{ statusList.length }}
                        <ul>
                            <li v-for="status in statusList">{{ status }}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../store";
export default {
    data() {
        return {
            store,
            filters: {
                name: "",
                status: "",
                species: "",
                type: "",
                gender: "",
            }
        };
    },
    emits: ["search"],
    computed: {
        speciesList() {
            const toReturn = [];
            this.store.charactersList.forEach((character) => {
                if (!toReturn.includes(character.species)) {
                    toReturn.push(character.species);
                }
            });
            return toReturn;
        },
        statusList() {
            const toReturn = [];
            this.store.charactersList.forEach((character) => {
                if (!toReturn.includes(character.status)) {
                    toReturn.push(character.status);
                }
            });
            return toReturn;
        }
    },
    methods: {
        onSearchClick() {
            this.$emit("search", { ...this.filters });
        }
    }
}
</script>