const Editorial = require("../models/Editorial");

exports.GetEditorialList = (req, res, next) => {
    // Pokemon.findAll().then(result =>{
    //     const pokemon = result.map((result) => result.dataValues);
        
        res.render("editorials/editorial-list", {
            pageTitle: "Editorials Lists",
            EditorialActive: true,
            // pokemon: pokemon,
            // hasPokemon: pokemon.length > 0
        })
    // }).catch((err) =>{
    //     console.log(err);
    // })
   
}
exports.GetCreateEditorial = (req, res, next) => {
    
    // // Region.findAll()
    //     .then(result =>{
    //         const region = result.map((result) => result.dataValues);
    //         Type.findAll().then((result) =>{
    //             const type = result.map((result) => result.dataValues);
                res.render("editorials/save-editorial", {
                    pageTitle: "Add a new editorial",
                    editMode: false,
                    // pokemonActive: true,
                    // region: region,
                    // type: type,
                    // hasRegion: region.length > 0,
                    // hasType: type.length > 0
                })
        //     })
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
   
}
exports.PostCreateEditorial = (req, res, next) => {
    const editorialId = req.body.editorialId;
    const EditorialName = req.body.Name;
    const EditorialTel  = req.body.Tel;
    const EditorialCountry  = req.body.Country;
    // const authorId = req.body.authorId;
    // const editorialId = req.body.editorialId;
    // const categoryId = req.body.categoryId;
    // const bookId = req.body.bookId;

    Editorial.create({
        id: editorialId,
        name: EditorialName, 
        phone: EditorialTel, 
        country: EditorialCountry, 
        // publication: BookPublication,
        // genre: BookGenre,
    })
    .then(result =>{
        res.redirect("/editorial")
    })
    .catch((err) => {
        console.log(err);
    });

}
exports.GetEditEditorial = (req, res, next) => {
    const edit = req.query.edit;
    const editorialId = req.body.editorialId;
 
    if(!edit){
         return res.redirect("/editorial")
    }
    //  Pokemon.findOne({ where: { id: pokemonId } })
    //  .then((result) => {
    //    const pokemon = result.dataValues;   
 
    //    if (!pokemon) {
    //      return res.redirect("/pokemons");
    //    }
    //      Region.findAll()
    //          .then((result) => {
    //          const region = result.map((result) => result.dataValues);
             
    //              Type.findAll().then((result) => {
    //                  const type = result.map((result) => result.dataValues);
 
                         res.render("editorials/save-editorial",{
                             pageTitle: "Edit Editorial",
                             editMode: edit,
                             editorialActive: true,
                            //  pokemon: pokemon,
                            //  region: region,
                            //  type: type,
                            //  hasRegion: region.length > 0,
                            //  hasType: type.length > 0
                         });
    //              });
    //          })
    //          .catch((err) => {
    //              console.log(err);
    //          });
    //  })
    //  .catch((err) => {
    //    console.log(err);
    //  });
 
    
 }
 exports.PostEditEditorial = (req, res, next) => {
    const editorialId = req.body.editorialId;
    const EditorialName = req.body.Name;
    const EditorialTel  = req.body.Tel;
    const EditorialCountry  = req.body.Country;
    // const editorialId = req.body.editorialId;
    // const categoryId = req.body.categoryId;
    // const bookId = req.body.bookId;

    Editorial.update({
        id: editorialId,
        name: EditorialName, 
        phone: EditorialTel, 
        country: EditorialCountry, 
        // categoryId:  categoryId,
        // editorialId: editorialId,
    }, 
        {where: {id: editorialId}}
    ).then(result =>{
        return res.redirect("/editorial")
    }).catch(err =>{
        console.log(err);
    })
  
}

exports.PostDeleteEditorial = (req, res, next) => {
    const editorialId = req.params.editorialId;
 
    Editorial.destroy({where: {id: editorialId}})
    .then(result =>{
     return res.redirect("/editorial")
     }).catch(err =>{
         console.log(err);
     })
     
 }