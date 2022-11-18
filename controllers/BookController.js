// const Book = require("../models/Book");
// const Region = require("../models/Region");
// const Type = require("../models/Type");

exports.GetIndex = (req, res, next) => {
    // Pokemon.findAll().then(result =>{
        // const pokemon = result.map((result) => result.dataValues);
        res.render("books/index", {
            pageTitle: "Book App",
            // homeActive: true,
            // pokemon: pokemon,
    
        })
    // }).catch((err) =>{
    //     console.log(err);
    // })
}