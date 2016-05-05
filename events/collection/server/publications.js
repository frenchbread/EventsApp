Meteor.publish("allEvents", function () {

  return Events.find();
});

Meteor.publish("singleEvent", function (eventId) {

  return Events.find({ _id: eventId });
});
