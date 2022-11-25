const Author = require("../models/Author");
const Book = require("../models/Book");

exports.GetAuthorList = (req, res, next) => {
    
    Author.findAll().then(result =>{
        const author = result.map((result) => result.dataValues);
        
        res.render("authors/author-list", {
            pageTitle: "Authors Lists",
            AuthorActive: true,
            author: author,
            hasAuthors: author.length > 0
        })
    }).catch((err) =>{
        console.log(err);
    })
   
}
exports.GetCreateAuthor = (req, res, next) => {
    
    Author.findAll()
        .then(result =>{
            const author = result.map((result) => result.dataValues);
                res.render("authors/save-author", {
                    pageTitle: "Add a new Author",
                    editMode: false,
                    author: author,
                })
        })
        .catch((err) => {
            console.log(err);
        });
   
}
exports.PostCreateAuthor = (req, res, next) => {
    const authorId = req.body.authorId;
    const AuthorName = req.body.Name;
    const AuthorEmail = req.body.Email;

    Author.create({
        id: authorId,
        name: AuthorName, 
        email: AuthorEmail,
    })
    .then(result =>{
        res.redirect("/authors")
    })
    .catch((err) => {
        console.log(err);
    });

}
exports.GetEditAuthor = (req, res, next) => {
    const edit = req.query.edit;
    const authorId = req.body.authorId;
 
    if(!edit){
         return res.redirect("/authors")
    }
     Author.findOne({ where: { id: authorId } })
     .then((result) => {
       const author = result.dataValues;   
 
       if (!author) {
         return res.redirect("/authors");
       }   
 
         res.render("authors/save-author",{
                pageTitle: "Edit Author",
                editMode: edit,
                authorActive: true,
                author: author,         
                });
             })
             .catch((err) => {
                 console.log(err);
             });
 
    
 }
 exports.PostEditAuthor = (req, res, next) => {
    const authorId = req.body.authorId;
    const AuthorName = req.body.Name;
    const AuthorEmail = req.body.Email;


   Author.update({
        id: authorId,
        name: AuthorName, 
        email: AuthorEmail, 
    }, 
        {where: {id: authorId}}
    ).then(result =>{
        return res.redirect("/authors")
    }).catch(err =>{
        console.log(err);
    })
  
}

exports.PostDeleteAuthor = (req, res, next) => {
    const authorId = req.params.authorId;
 
    Author.destroy({where: {id: authorId}})
    .then(result =>{
     return res.redirect("/authors")
     }).catch(err =>{
         console.log(err);
     })
     
 }