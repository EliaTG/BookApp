const Book = require("../models/Book");
const Author = require("../models/Author");
const Category = require("../models/Category");
const Editorial = require("../models/Editorial");


exports.GetIndex = (req, res, next) => {
    // Book.findAll().then(result =>{
    //     const book = result.map((result) => result.dataValues);
        res.render("books/index", {
            pageTitle: "Book App",
            bookActive: true,
            // book: book,
    
        })
    // }).catch((err) =>{
    //     console.log(err);
    // })
}
exports.GetBookList = (req, res, next) => {

    Book.findAll().then(result =>{
        const book = result.map((result) => result.dataValues); 
        res.render("books/book-list", {
            pageTitle: "Books Lists",
            BookActive: true,
            book: book,
            hasBook: book.length > 0
        })
    }).catch((err) =>{
        console.log(err);
    })
   
}
exports.GetCreateBook = (req, res, next) => {
    
    // Author.findAll()
    //     .then(result =>{
    //         const author = result.map((result) => result.dataValues);

    //         Category.findAll().then((result) =>{
    //             const category = result.map((result) => result.dataValues);

    //             Editorial.findAll().then((result) =>{
    //                 const editorial = result.map((result) => result.dataValues);
                    res.render("books/save-book", {
                        pageTitle: "Add a new book",
                        editMode: false,
                        bookActive: true,
                        // author: author,
                        // category: category,
                        // editorial: editorial,
                        // hasAuthors: author.length > 0,
                        // hasCategories: category.length > 0,
                        // hasEditorials: editorial.length > 0
                    })
        //          })
        //     })
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
   
}

exports.PostCreateBook = (req, res, next) => {
    const BookTitle = req.body.Title;
    const BookImageUrl = req.body.ImageUrl;
    const BookPublished = req.body.Published;


    Book.create({
        title: BookTitle, 
        imageUrl: BookImageUrl.path,
        yearPublished: BookPublished,
        // publication: BookPublication,
        // genre: BookGenre,
    })
    .then(result =>{
        res.redirect("/book")
    })
    .catch((err) => {
        console.log(err);
    });

}
exports.GetEditBook = (req, res, next) => {
    const edit = req.query.edit;
    const bookId = req.params.bookId;
 
    if(!edit){
         return res.redirect("/book")
    }
     Book.findOne({ where: { id: bookId } })
     .then((result) => {
       const book = result.dataValues;   
 
        if (!book) {
            return res.redirect("/book");
         }
         Author.findAll().then((result) => {
             const author = result.map((result) => result.dataValues);
             
                    Category.findAll().then((result) => {
                        const category = result.map((result) => result.dataValues);

                                Editorial.findAll().then((result) => {
                                    const editorial = result.map((result) => result.dataValues);
        
                                        res.render("books/save-book",{
                                            pageTitle: "Edit Book",
                                            editMode: edit,
                                            bookActive: true,
                                            author: author,
                                            category: category,
                                            editorial: editorial,
                                            hasAuthors: author.length > 0,
                                            hasCategories: category.length > 0,
                                            hasEditorials: editorial.length > 0
                                        });
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    });
                                 })
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                })
                .catch((err) => {
                  console.log(err);
                });
 
    
 }
 exports.PostEditBook = (req, res, next) => {
    const BookTitle = req.body.Title;
    const BookImageUrl = req.body.ImageUrl;
    const BookPublished = req.body.Published;
    const bookId = req.body.bookId;
    // const authorId = req.body.authorId;
    // const editorialId = req.body.editorialId;
    // const categoryId = req.body.categoryId;

   Book.update({
        title: BookTitle, 
        imageUrl: BookImageUrl, 
        yearPublished: BookPublished,
        // categoryId:  categoryId,
        // editorialId: editorialId,
        // authorId: authorId,
    }, 
        {where: {id: bookId}}
    ).then(result =>{
        return res.redirect("/book")
    }).catch(err =>{
        console.log(err);
    })
  
}

exports.PostDeleteBook = (req, res, next) => {
    const bookId = req.body.bookId;
 
    Book.destroy({where: {id: bookId}})
    .then(result =>{
     return res.redirect("/book")
     }).catch(err =>{
         console.log(err);
     })
     
 }