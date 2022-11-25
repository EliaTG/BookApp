const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/CategoryController');

router.get("/category", CategoryController.GetCategoryList);
router.get("/create-category", CategoryController.GetCreateCategory);
router.post("/create-category", CategoryController.PostCreateCategory);
router.get("/edit-category/:categoryId", CategoryController.GetEditCategory);
router.post("/edit-category", CategoryController.PostEditCategory);
router.post("/delete-category", CategoryController.PostDeleteCategory);



module.exports = router;