const DesignTokensController = require('../Controllers/DesignTokensController');

module.exports = (app) => {
    app.get('/design-tokens', DesignTokensController.get);
}