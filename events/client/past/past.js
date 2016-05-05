Template.pastEvents.onCreated(function () {

  const instance = this;

  instance.events = new ReactiveVar();

  instance.subscribe("pastEvents");

  instance.autorun(() => {
    if (instance.subscriptionsReady()) {
      instance.events.set(Events.find().fetch());
    }
  })
})

Template.pastEvents.helpers({
  events () {
    const instance = Template.instance();
    return instance.events.get();
  },
  fromNow (date) {

    return moment(date).fromNow();
  }
})
