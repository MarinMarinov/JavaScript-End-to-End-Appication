var Playlist = require('mongoose').model('Playlist'),
    constants = require('../common/constants');

module.exports = {
    create: function(playlist, user, callback) {
        if (constants.categories.indexOf(playlist.category) < 0) {
            callback('Invalid category');
            return;
        }

        playlist.creator = user.username;

        Playlist.create(playlist, callback);
    },
    getPopularPlaylists: function(cb) {
        Playlist
            .find({'public': 'true'})
            .sort({
                rating: 'desc'
            })
            .limit(8)
            .exec(function(err, playlists){
                if (err) {
                    cb(err);
                    return;
                }

                cb(null, playlists);
            });

    },
    getDetails: function(id, cb) {
        Playlist.findOne({_id: id}, cb);
    }
};