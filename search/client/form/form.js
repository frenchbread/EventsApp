Template.searchForm.events({
  'submit #main-search': function (event, template) {

    event.preventDefault();

    const instance = Template.instance();

    const searchValue = $('#main-search-text').val();

    FlowRouter.go('/search', {}, { q: searchValue });
  }
})
