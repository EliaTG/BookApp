const express = require('express');
const router = express.Router();

const AuthorsController = require('../controllers/AuthorController');

router.get("/authors", AuthorsController.GetAuthorList);
router.get("/create-author", AuthorsController.GetCreateAuthor);
router.post("/create-author", AuthorsController.PostCreateAuthor);
router.get("/edit-author/:authorId", AuthorsController.GetEditAuthor);
router.post("/edit-author", AuthorsController.PostEditAuthor);
router.post("/delete-author", AuthorsController.PostDeleteAuthor);



module.exports = router;