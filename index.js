const CategoriesRoute = require('./src/Routes/CategoriesRoute');
const RecipesRoute = require('./src/Routes/RecipesRoute');

module.exports = (app) => {
    RecipesRoute(app),
    CategoriesRoute(app)
};