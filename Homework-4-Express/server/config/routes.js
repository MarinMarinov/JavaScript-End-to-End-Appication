var auth = require('./auth'),
    controllers = require('../controllers');

module.exports = function(app) {
    app.get('/', controllers.home.getHome);

    app.get('/register', controllers.users.getRegister);
    app.post('/register', controllers.users.postRegister);

    app.get('/login', controllers.users.getLogin);
    app.post('/login', auth.login);
    app.get('/logout', auth.logout);

    app.get('/profile', auth.isAuthenticated, controllers.profile.getProfile);
    app.post('/profile', auth.isAuthenticated, controllers.profile.postProfile);

    app.get('/playlists/create', auth.isAuthenticated, controllers.playlists.getCreate);
    app.post('/playlists/create', auth.isAuthenticated, controllers.playlists.postCreate);
    app.get('/playlists/details', auth.isAuthenticated, controllers.playlists.getDetails);



    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('*', function(req, res) {
        res.render('index');
    });
};