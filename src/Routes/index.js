const CategoriesRoute = require('./CategoriesRoute');
const RecipesRoute = require('./RecipesRoute');

module.exports = (app) => {
    RecipesRoute(app),
    CategoriesRoute(app)
};