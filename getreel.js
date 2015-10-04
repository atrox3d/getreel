Applications = new Mongo.Collection('applications');

if (Meteor.isClient) {
  /*Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });*/

  Template.body.helpers({
    jobs: [
      {title: 'Select a job position...'},
      {_id: 1, title: 'Haiti Village Photographer'},
      {_id: 2, title: 'Rapallo On The Beach'}
    ],
    webrtc: Modernizr.getusermedia,
    showUpload: function() {
      return Session.get('showUpload')
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
}

Meteor.methods({
  apply: function() {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Applications.insert({
      firstname: '',
      lastname: ''
    });
  }
});
