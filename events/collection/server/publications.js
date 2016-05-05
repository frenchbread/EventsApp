Meteor.publish("upcomingEvents", function () {

  return Events.find({ date: { $gte: new Date() }});
});

Meteor.publish("pastEvents", function () {

  return Events.find({ date: { $lte: new Date() }});
});

Meteor.publish("singleEvent", function (eventId) {

  return Events.find({ _id: eventId });
});
