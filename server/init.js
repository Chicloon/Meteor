
Meteor.startup(function() {
  if (Recipes.find().count() === 0) {
    console.log('No db entrees found');
    console.log(' ');
    }
});
