import { URL_API_CATEGORIES, HEADERS } from "../constants/http_constants.js"
export default class CategoryService {
    static getCategories() {
        return fetch(URL_API_CATEGORIES)
                .then(res => res.json())
                .catch(error=>error)
    }
    static getCategoriesByName(name) {
        return fetch(`${URL_API_CATEGORIES}/${name}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static getCategoryById(id) {
        return fetch(`${URL_API_CATEGORIES}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static new(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_CATEGORIES, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_CATEGORIES, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_CATEGORIES}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }

}
