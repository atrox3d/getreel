Jobs = new Mongo.Collection('jobs'); //both on client and server

Template.body.helpers({
    // webrtc: Modernizr.getUserMedia,
    // webrtc: function() {
    //     console.log('Modernizr from helper:', Modernizr);
    //     console.log('Modernizr.getusermedia from helper:', Modernizr.getusermedia);
    //     return Modernizr.getusermedia!=null
    // },

    webrtc: function () {
            return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
    },

    showUpload: function() {
        return Session.get('showUpload');
    }
});

Template.body.helpers({
    jobs: function() {
        return Jobs.find({});
    }
});

Session.set('showUpload', true);

Template.body.events({
    'change input[name="video-type"]': function(e) {
        var value = e.target.value;
        if (value === 'file') {
            Session.set('showUpload', true);
        } else {
            Session.set('showUpload', false);
        }
    }
});
