var UsersController = require('./UsersController');
var PlaylistsController = require('./PlaylistsController');
var ProfileController = require('./ProfileController');
var HomeController = require('./HomeController');

module.exports = {
    users: UsersController,
    playlists: PlaylistsController,
    profile: ProfileController,
    home: HomeController
};