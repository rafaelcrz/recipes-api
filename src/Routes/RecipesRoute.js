const RecipesController = require('../Controllers/RecipesController');

module.exports = (app) => {
    app.get('/recipes', RecipesController.get);
}