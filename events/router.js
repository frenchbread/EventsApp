// Add event route
FlowRouter.route('/new', {
  action: function() {
    BlazeLayout.render('mainLayout', { main: "addEvent" });
  }
});
