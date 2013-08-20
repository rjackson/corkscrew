import Index from 'appkit/routes/index';
import App from 'appkit/app';

module("Acceptances - Index", {
  setup: function(){
    App.reset();
  }
});

test("renders resource links", function(){

  var a, links = [
    {name: 'Batches',  location: '/batches'},
    {name: 'Customer',  location: '/customers'},
    {name: 'Batch Types',  location: '/batch_types'},
    {name: 'Action Types', location: '/action_types'},
  ];

  expect(links.length * 2);

  visit('/').then(function(){
    links.forEach(function(link){
      a = find("a:contains('"+link.name+"')");
      ok(link);
      equal(a.attr('href'), link.location);
    });
  });
});

test("index renders", function(){
  expect(3);

  visit('/').then(function(){
    ok(exists("h2:contains('Welcome to Ember.js')"));

    var list = find("li.colors");
    equal(list.length, 3);
    equal(list.text(), "redyellowblue");
  });
});
