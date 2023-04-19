import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
    searchText: "",
    loading: true,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&num=50&offset=0',
    cards: null,
    meta: null,
    length: null,
    numberValue: null,
    fetchCards(url) {
        axios
            .get(url)
            .then(response => {
                console.log(response);
                state.cards = response.data.data;
                const types = [...new Set(state.cards.map(card => card.type))];
                console.log(this.cards);
            })
    },
})