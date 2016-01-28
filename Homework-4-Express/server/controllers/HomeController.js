var stats = require('../utilities/stats');


module.exports = {
    getHome: function(req, res, next) {
        stats.get(function(err, playlists) {
            if (err) {
                res.status(400);
                return;
            }

            res.render('index', {
                playlists : playlists
            });
        })
    }
};