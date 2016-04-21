Meteor.methods({
  'posts.insert'(text) {
    console.log('hello  posts insert');
    check(text, String);
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
 
    Posts.insert({
      title,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'posts.remove'(Id) {
    check(Id, String);
 
    Posts.remove(Id);
  },
  'posts.setPrivate'(Id, setToPrivate) {
    check(Id, String);
    check(setToPrivate, Boolean);
 
    const posts= Posts.findOne(Id);
 
    // Make sure only the task owner can make a task private
    if (posts.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
 
    Posts.update(Id, { $set: { private: setToPrivate } });
  },
  });