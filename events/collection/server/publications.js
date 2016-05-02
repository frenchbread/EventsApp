Meteor.publish("upcomingEvents", function () {

  return Events.find({ date: { $gte: new Date() }});
});
