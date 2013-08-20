import App from 'appkit/app';

module("Acceptances - Batches", {
  setup: function(){
    App.reset();
  }
});

test("batches renders", function(){
  expect(0);

  visit('/batches').then(function(){
    //ok(exists("h2:contains('Welcome to Ember.js')"));

    var list = find("li.colors");
    //equal(list.length, 3);
    //equal(list.text(), "redyellowblue");
  });
});

