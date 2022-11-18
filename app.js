const express = require("express");
const path = require("path")
const expressHbs = require("express-handlebars");
const {engine} = require("express-handlebars");
// const sequelize = require("./util/database");
const app = express();

const ErrorController = require("./controllers/ErrorController")

app.engine("hbs", expressHbs.engine({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: 'hbs',
    // helpers: {
    //     equalValue: compareHelpers.EqualValue,
    //   },
    },
))
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

const BookRouter = require('./routes/book');

app.use(BookRouter);

// sequelize.sync().then(result=>{
//     app.listen(5070);
//   }).catch(err =>{
//       console.log(err);
//   })

app.listen(5090, () => {
    console.log('App listening to port', 5090);
})