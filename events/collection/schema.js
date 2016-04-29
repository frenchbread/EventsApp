Events.schema = new SimpleSchema({
  name: {
    type: String
  },
  details: {
    type: String,
    autoform: {
      rows: 5
    }
  },
  location: {
    type: String
  },
  date: {
    type: Date,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },
  adminId: {
    type: String,
    autoValue: function () {

      if (this.isInsert ) return Meteor.userId();
    }
  },
  createdAt: {
    type: Date,
    autoValue: function () {

      // Check if mongoDB insert operation is initial
      if (this.isInsert) return new Date();

      // Check if mongoDB insert operation is initial
      else if (this.isUpsert) return { $setOnInsert: new Date() };

      // If not - field is not updated
      else this.unset();
    }
  },
  updatedAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }
});

// Attach the schema
Events.attachSchema(Events.schema);
