Template.searchResults.onCreated(function () {

  const instance = this;

  instance.searchResults = new ReactiveVar('');
  instance.searchValue = new ReactiveVar('');

  instance.autorun(() => {

    instance.searchValue.set(FlowRouter.getQueryParam('q'));

    if (instance.searchValue.get()) {

      Meteor.call('searchEvents', instance.searchValue.get(), (err, res) => {

        if (err) console.log(err);

        instance.searchResults.set(res);
      });
    }
  });

});

Template.searchResults.helpers({
  searchResults () {

    const instance = Template.instance();

    const searchResults = instance.searchResults.get();

    return searchResults;
  },
  searchValue () {

    const instance = Template.instance();

    return instance.searchValue.get();
  }
})
