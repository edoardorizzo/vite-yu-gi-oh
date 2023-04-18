import { reactive } from 'vue';

export const state = reactive({
    searchText: "",
    loading: true,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&num=20&offset=0',
    cards: null,
    meta: null,
})