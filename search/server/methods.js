Meteor.methods({
  searchEvents (searchValue) {

    searchValue = searchValue.trim();

    console.log(searchValue)

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
