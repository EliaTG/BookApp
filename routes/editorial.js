const express = require('express');
const router = express.Router();

const EditorialController = require('../controllers/EditorialController');

router.get("/editorial", EditorialController.GetEditorialList);
router.get("/create-editorial", EditorialController.GetCreateEditorial);
router.post("/create-editorial", EditorialController.PostCreateEditorial);
router.get("/edit-editorial/:editorialId", EditorialController.GetEditEditorial);
router.post("/edit-editorial", EditorialController.PostEditEditorial);
router.post("/delete-editorial", EditorialController.PostDeleteEditorial);



module.exports = router;