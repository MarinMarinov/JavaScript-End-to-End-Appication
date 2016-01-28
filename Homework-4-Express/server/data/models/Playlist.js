var mongoose = require('mongoose');

var requiredMessage = '{PATH} is required';

module.exports.init = function() {
    var playlistSchema = mongoose.Schema({
        title: {type: String, required: requiredMessage},
        description: {type: String, required: requiredMessage},
        category: {type: String, required: requiredMessage},
        videoUrls: [{type: String, required: requiredMessage}],
        creator: { type: String, required: requiredMessage},
        creationDate: { type: Date, default: Date.now },
        comments: [{type: String, default: 'Brand new playlist!'}],
        public: {type: Boolean, required: requiredMessage},
        rating: {type: Number, default: 1, min: 1, max: 5}
    });

    var Playlist = mongoose.model('Playlist', playlistSchema);
};