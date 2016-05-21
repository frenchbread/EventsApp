Template.mainSearch.onCreated(function () {

  const instance = this;

  instance.searchResults = new ReactiveVar('');

});

Template.mainSearch.helpers({
  searchResults () {

    const instance = Template.instance();

    const searchResults = instance.searchResults.get();

    return searchResults;
  }
});

Template.mainSearch.events({
  'submit #main-search': function (event, template) {

    event.preventDefault();

    const instance = Template.instance();

    const searchValue = $('#main-search-text').val();

    Meteor.call('searchEvents', searchValue, (err, res) => {

      if (err) console.log(err);

      instance.searchResults.set(res);
    });
  }
})
