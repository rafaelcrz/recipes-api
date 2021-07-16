const CategoriesController = require('../Controllers/CategoriesController');

module.exports = (app) => {
    app.get('/categories', CategoriesController.get);
}