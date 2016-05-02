// Add event route
FlowRouter.route('/new', {
  action: function() {
    BlazeLayout.render('mainLayout', { main: "addEvent" });
  }
});

FlowRouter.route('/event/:_id', {
  action: function() {
    BlazeLayout.render('mainLayout', { main: "singleEvent" });
  }
});
