import express from "express";
import * as filmsController from '../controllers/filmsController.js';

const router = express.Router();

router.get('/films', filmsController.showFilms)
router.get('/films/search/:query', filmsController.searchFilms)
router.get('/films/:idFilm', filmsController.showFilm)
router.put('/films', filmsController.updateFilm)
export default router;