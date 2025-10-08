import { error } from '@sveltejs/kit';
import breweries from '../../../constants/breweries.js';

export function load(data) {
    const breweryId = data.params.id;

    for (let brewery of breweries) {
        if(brewery.id == breweryId) {
            return {brewery}
        }
    }
    error(404, "Brewery not found")
}