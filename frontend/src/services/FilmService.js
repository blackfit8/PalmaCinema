import { URL_API_FILMS, HEADERS } from "../constants/http_constants.js"
export default class FilmService {
    static getFilms() {
        return fetch(URL_API_FILMS)
                .then(res => res.json())
                .catch(error=>error)
    }
    static getFilmsByName(name) {
        return fetch(`${URL_API_FILMS}/${name}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static getFilmById(id) {
        return fetch(`${URL_API_FILMS}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static new(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_FILMS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_FILMS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_FILMS}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }

}
