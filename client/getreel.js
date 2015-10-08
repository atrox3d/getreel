Jobs = new Mongo.Collection('jobs'); //both on client and server

Template.body.helpers({
    webrtc: Modernizr.getUserMedia,
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
