Template.pastEvents.onCreated(function () {

  const instance = this;

  instance.events = new ReactiveVar();

  instance.subscribe("allEvents");

  instance.autorun(() => {
    if (instance.subscriptionsReady()) {
      instance.events.set(Events.find({ date: { $lte: new Date() } }).fetch());
    }
  })
})

Template.pastEvents.helpers({
  events () {
    const instance = Template.instance();
    return instance.events.get();
  }
})
