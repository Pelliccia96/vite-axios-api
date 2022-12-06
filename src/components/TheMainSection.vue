<template>
    <section>
        <div class="my-alert text-white fw-bold p-3">Found 62 characters</div>
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
        /* this.store.charactersList = resp.data.results; */
      })
/*       .catch((error) => {
        console.log(error);
        console.log("Codice errore: ", error.response.status);
        this.ajaxError ="A causa di un errore, l'operazione non è andata a buon fine";
        this.store.loading = false;
      }); */
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
