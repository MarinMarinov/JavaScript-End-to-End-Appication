var User = require('mongoose').model('User');


module.exports = {
    create: function(user, callback) {
        User.create(user, callback);
    },
    update: function(username, user, callback) {
        User.findOneAndUpdate({username: username}, user, callback);
    }
};