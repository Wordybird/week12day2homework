use codeclan;

db.students.insert([
  {
    name: "Fred",
    favouriteFood: "Pizza"
  },
  {
    name: "Jeff",
    favouriteFood: "Haggis?!"
  }
]);

db.students.find({},{_id:0});

db.instructors.insert([
  {
    name: "John",
    favouriteFood: "Pasta"
  },
  {
    name: "Jarrod",
    favouriteFood: "Burger"
  }
]);

db.instructors.find({},{_id:0});

show collections;
db.dropDatabase();