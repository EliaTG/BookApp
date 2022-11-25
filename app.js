const express = require("express");
const path = require("path")
const expressHbs = require("express-handlebars");
const {engine} = require("express-handlebars");
const sequelize = require("./util/database");
const Book = require("./models/Book");
const Author = require("./models/Author");
const Category = require("./models/Category");
const Editorial = require("./models/Editorial");
const compareHelpers = require("./util/helpers/compare")

const app = express();

const ErrorController = require("./controllers/ErrorController")

app.engine("hbs", expressHbs.engine({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: 'hbs',
    helpers: {
        equalValue: compareHelpers.EqualValue,
      },
    },
))
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

const BookRouter = require('./routes/book');
const AuthorRouter = require('./routes/author');
const CategoryRouter = require('./routes/category');
const EditorialRouter = require('./routes/editorial');

app.use(BookRouter);
app.use(AuthorRouter);
app.use(CategoryRouter);
app.use(EditorialRouter);
app.use(ErrorController.Get404);

Book.belongsTo(Author, { constraint: true, onDelete: "CASCADE"});
Author.hasMany(Book);

Book.belongsTo(Category, { constraint: true, onDelete: "CASCADE"});
Category.hasMany(Book);

Book.belongsTo(Editorial, { constraint: true, onDelete: "CASCADE"});
Editorial.hasMany(Book);


sequelize.sync().then(result=>{
    app.listen(5090);
  }).catch(err =>{
      console.log(err);
  })


