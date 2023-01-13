import express from "express";
import * as categoriesController from '../controllers/categoriesController.js';

const router = express.Router();

router.get('/categories', categoriesController.showCategories);
router.get('/categories/search/:query', categoriesController.searchCategories)
router.get('/categories/:idCategory', categoriesController.showCategory)
router.put('/categories', categoriesController.updateCategory)

export default router;