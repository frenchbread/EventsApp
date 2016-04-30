Events.allow({
  insert: function () {

    // const userId = Meteor.userId();
    //
    // if (userId && Roles.userIsInRole(userId, 'admin')) {
    //   return true;
    // }
    return true;
  },
  update: function (userId, organization) {

    // return organization.currentUserIsAdmin();
    return true;
  }
});
