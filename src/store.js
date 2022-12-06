import { reactive } from "vue";

export const store = reactive ({
    charactersList: [],
    paginationInfo: {},
    loading: false,
})
