const express = require('express');
const router = express.Router();

const BookController = require('../controllers/BookController');

router.get("/", BookController.GetIndex);
router.get('/book',BookController.GetBookList);
router.get("/create-book", BookController.GetCreateBook);
router.post("/create-book", BookController.PostCreateBook);
router.get("/edit-book/:bookId", BookController.GetEditBook);
router.post("/edit-book", BookController.PostEditBook);
router.post("/delete-book", BookController.PostDeleteBook);



module.exports = router;