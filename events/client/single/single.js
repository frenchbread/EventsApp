Template.singleEvent.onCreated(function () {

  const instance = this;

  const eventId = FlowRouter.current().params._id;

  instance.subscribe("singleEvent", eventId);
  instance.event = new ReactiveVar();

  instance.autorun(() => {
    if (instance.subscriptionsReady()) {
      instance.event.set(Events.findOne(eventId));
    }
  });
});

Template.singleEvent.helpers({
  event () {
    const instance = Template.instance();
    return instance.event.get();
  }
});
