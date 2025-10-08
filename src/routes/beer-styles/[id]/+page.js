import { error } from '@sveltejs/kit';
import beerStyles from '../../../constants/beer-styles.js';

export function load(data) {
    const beerStyleId = data.params.id;

    for (let beerStyle of beerStyles) {
        if(beerStyle.id == beerStyleId) {
            return { beerStyle };
        }
    }

    error(404, "Beer Style not found");
}