const CategoriesRoute = require('./src/Routes/CategoriesRoute');
const RecipesRoute = require('./src/Routes/RecipesRoute');
const DesignTokensRoute = require('./src/Routes/DesignTokensRoute');

module.exports = (app) => {
    RecipesRoute(app),
    CategoriesRoute(app),
    DesignTokensRoute(app)
};