var playlists = require('../data/playlists');
var constants = require('../common/constants');
var User = require('mongoose').model('User');


var CONTROLLER_NAME = 'playlists';

module.exports = {
    getCreate: function(req, res){
            res.render(CONTROLLER_NAME + '/create', {
            categories: constants.categories
        });
    },
    postCreate: function(req, res) {
        var playlist = req.body;
        var user = req.user;

        playlists.create(
            playlist,
            user,
            function (err, playlist) {
                if (err) {
                    var data = {
                        categories: constants.categories,
                        errorMessage: err
                    };
                    res.render(CONTROLLER_NAME + '/create', data);
                }
                else {
                    res.redirect('/playlists/details?id='+ playlist._id); // TODO: implement playlists details
                }
            })
    },
    getDetails: function(req, res){
        playlists.getDetails(req.query.id, function(err, playlist) {
            if (err) {
                req.session.error = 'Could not find playlist with such id';
                res.redirect('/');
                return;
            }

            res.render(CONTROLLER_NAME + '/details', {
                playlist: playlist
            });
        });
    }
};
