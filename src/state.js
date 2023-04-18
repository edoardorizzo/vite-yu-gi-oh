import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
    searchText: "",
    loading: true,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&num=20&offset=0',
    cards: null,
    meta: null,
    fetchCards(url) {
        axios
            .get(url)
            .then(response => {
                console.log(response);
                state.cards = response.data.data;
                state.meta = response.data.meta;
                console.log(this.cards);
            })
    },
})