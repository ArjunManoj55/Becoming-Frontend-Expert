//map-real world
const users = [
  { firstName: "user1", lastName: "test1", age: 10 },
  { firstName: "user2", lastName: "test2", age: 15 },
  { firstName: "user3", lastName: "test3", age: 10 },
  { firstName: "user4", lastName: "test4", age: 25 },
  { firstName: "user5", lastName: "test5", age: 30 },
];

 

const first = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(first);
