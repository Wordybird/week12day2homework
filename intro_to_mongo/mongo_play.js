use farm;

db.animals.insert({
  name: "Eric",
  type: "Polar Bear"
});
db.animals.insert({
  name: "Jonathan",
  type: "Grizzly Bear"
});
db.animals.find();
// Items are stored in an array-like object. Think Ruby arrays.
// db.animals.find({name: "Eric"});
// That's how you find something by it's key: value pair.

db.animals.update(
  {name: "Jonathan"},
  {
    $set: {type: "Polar Bear"}
  }
);
db.animals.find();

db.animals.remove ({type: "Polar Bear"});
db.animals.find();

db.dropDatabase();

// db.animals.insert({
//   brand: "Nike",
//   type: "Elephant Gun"
// });
// Mongo doesn't care what goes into it since nothing is defined at the start. It's a big old bucket of stuff.
// Very flexible, but you need to be sensible with it. With great power, etc etc.
