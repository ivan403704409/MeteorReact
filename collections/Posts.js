Posts = new Mongo.Collection('posts');
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('posts', function postsPublication() {
    return Posts.find();
  });
}


