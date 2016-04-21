Meteor.methods({
  'items.insert'(text) {
    console.log('hello insert');
    check(text, String);
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
 
    Items.insert({
      text:text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'items.remove'(Id) {
    check(Id, String);
 
    Items.remove(Id);
  },
  'items.setPrivate'(Id, setToPrivate) {
    check(Id, String);
    check(setToPrivate, Boolean);
 
    const items= Items.findOne(Id);
 
    // Make sure only the task owner can make a task private
    if (items.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
 
    Items.update(Id, { $set: { private: setToPrivate } });
  },
  // 'items.setChecked'(Id, setChecked) {
  //   check(Id, String);
  //   check(setChecked, Boolean);
 
  //  Items.update(Id, { $set: { checked: setChecked } });
  // },
});