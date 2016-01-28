var playlists = require('../data/playlists');

var playlistObject;

module.exports = {
    get : function(callback) {                                          // 10 minutes in milliseconds
        if (!playlistObject || playlistObject.updated > (new Date()).getTime() - 1000 * 60 * 10) {
            playlists.getPopularPlaylists(function(err, playlists) {
                if (err) {
                    callback(err);
                    return;
                }

                playlistObject = {
                    playlists : playlists,
                    updated: (new Date()).getTime()
                };

                callback(null, playlistObject.playlists);
            })
        }
    }
};