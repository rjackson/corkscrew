import App from 'appkit/app';

module("Acceptances - BatchTypes", {
  setup: function(){
    App.reset();
  }
});

test("lists known batch types", function(){
  expect(0);

  visit('/batches').then(function(){
    //ok(exists("h2:contains('Welcome to Ember.js')"));

    var list = find("li.colors");
    //equal(list.length, 3);
    //equal(list.text(), "redyellowblue");
  });
});


