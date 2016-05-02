Meteor.publish("allEvents", function () {

  return Events.find();
});
