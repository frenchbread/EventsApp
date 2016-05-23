FlowRouter.route('/search', {
  action: function() {
    BlazeLayout.render('mainLayout', { main: "searchResults" });
  }
});
