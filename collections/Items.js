Items = new Mongo.Collection('items');
Meteor.methods({
  'items.insert'(text) {
    check(text, String);
 
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
 
    items.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'items.remove'(Id) {
    check(Id, String);
 
    Items.remove(Id);
  },
  'tems.setChecked'(Id, setChecked) {
    check(Id, String);
    check(setChecked, Boolean);
 
   Items.update(Id, { $set: { checked: setChecked } });
  },
});