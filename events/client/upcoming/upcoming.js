Template.upcommingEvents.onCreated(function () {

  const instance = this;

  instance.events = new ReactiveVar();

  instance.subscribe("allEvents");

  instance.autorun(() => {
    if (instance.subscriptionsReady()) {
      instance.events.set(Events.find({ date: { $gte: new Date() } }).fetch());
    }
  })
})

Template.upcommingEvents.helpers({
  events () {
    const instance = Template.instance();
    return instance.events.get();
  },
  fromNow (date) {

    return moment(date).fromNow();
  }
})
