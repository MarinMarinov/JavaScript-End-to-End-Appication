var users = require('../data/users');

var CONTROLLER_NAME = 'profile';

module.exports = {
    getProfile: function (req, res, next) {
        res.render(CONTROLLER_NAME + '/profile')
    },
    postProfile : function(req, res, next) {
        req.pipe(req.busboy);

        var newUserData = {};

        req.busboy.on('field', function(fieldname, val) {
            newUserData[fieldname] = val;
        });

        req.busboy.on('finish', function() {
            users.update(req.user.username, newUserData, function(err, user) {
                if (err) {
                    req.session.error = 'Could not update user';
                }

                res.redirect('/profile');
            });
        });
    }
};
