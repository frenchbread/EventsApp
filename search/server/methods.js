Meteor.methods({
  searchEvents (searchValue) {

    if (!searchValue || searchValue === '') {
      return {}
    }

    searchValue = searchValue.trim();

    const query = {
      $or: [
        {
          name: {
            $regex: searchValue,
            $options: 'i'
          }
        },
        {
          details: {
            $regex: searchValue,
            $options: 'i'
          }
        }
      ]
    };

    const results = Events.find(query).fetch();

    return results;
  }
})
