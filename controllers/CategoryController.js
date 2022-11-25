const Category = require("../models/Category");
const Book = require("../models/Book");

exports.GetCategoryList = (req, res, next) => {
    Category.findAll().then(result =>{
        const category = result.map((result) => result.dataValues);
        
        res.render("categories/category-list", {
            pageTitle: "Categories Lists",
            CategoryActive: true,
            category: category,
            hasCategories: category.length > 0
        })
    }).catch((err) =>{
        console.log(err);
    })
   
}
exports.GetCreateCategory = (req, res, next) => {
    
    Category.findAll().then(result =>{
            const category = result.map((result) => result.dataValues);
                res.render("categories/save-category", {
                    pageTitle: "Add a new category",
                    editMode: false,
                    categoryActive: true,
                    category: category,
                })
        })
        .catch((err) => {
            console.log(err);
        });
   
}
exports.PostCreateCategory = (req, res, next) => {
    const categoryId = req.body.categoryId;
    const CategoryName = req.body.Name;
    const CategoryDescription  = req.body.Description;
    // const authorId = req.body.authorId;
    // const editorialId = req.body.editorialId;
    // const categoryId = req.body.categoryId;
    // const bookId = req.body.bookId;

    Category.create({
        id: categoryId,
        name: CategoryName, 
        description: CategoryDescription, 
    })
    .then(result =>{
        res.redirect("/category")
    })
    .catch((err) => {
        console.log(err);
    });

}
exports.GetEditCategory = (req, res, next) => {
    const edit = req.query.edit;
    const categoryId = req.body.categoryId;
 
    if(!edit){
         return res.redirect("/category")
    }
    Category.findOne({ where: { id: categoryId } }).then((result) => {
      const category = result.dataValues;   

            if (!category) {
                return res.redirect("/category");
            }   
            res.render("categories/save-category",{
                pageTitle: "Edit Category",
                editMode: edit,
                categoryActive: true,
            });
            })
            .catch((err) => {
                console.log(err);
            });
 
 }
 exports.PostEditCategory = (req, res, next) => {
    const categoryId = req.body.categoryId;
    const CategoryName = req.body.Name;
    const CategoryDescription  = req.body.Description;
    // const editorialId = req.body.editorialId;
    // const categoryId = req.body.categoryId;
    // const bookId = req.body.bookId;

    Category.update({
        id: categoryId,
        name: CategoryName, 
        description: CategoryDescription, 
    }, 
        {where: {id: categoryId}}
    ).then(result =>{
        return res.redirect("/category")
    }).catch(err =>{
        console.log(err);
    })
  
}

exports.PostDeleteCategory = (req, res, next) => {
    const categoryId = req.body.categoryId;
 
    Category.destroy({where: {id: categoryId}})
    .then(result =>{
     return res.redirect("/category")
     }).catch(err =>{
         console.log(err);
     })
     
 }