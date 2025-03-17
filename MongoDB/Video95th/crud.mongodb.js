use("CrudDb")
db.createCollection("Courses")

db.Courses.insertOne(
    {name: "MongoDB", price: 100, author: "Simrat"}
)
db.Courses.insertMany([     //multiple documents insertions
    {
      "name": "Python Masterclass",
      "price": 0,
      "assignments": 10,
      "projects": 30
    },
    {
      "name": "JavaScript Basics",
      "price": 0,
      "assignments": 8,
      "projects": 20
    },
    {
      "name": "C# for Beginners",
      "price": 0,
      "assignments": 15,
      "projects": 40
    },
    {
      "name": "Web Development Fundamentals",
      "price": 0,
      "assignments": 12,
      "projects": 35
    },
    {
      "name": "Java Programming Essentials",
      "price": 0,
      "assignments": 14,
      "projects": 38
    },
    {
      "name": "ReactJS Crash Course",
      "price": 0,
      "assignments": 10,
      "projects": 25
    },
    {
      "name": "SQL Simplified",
      "price": 0,
      "assignments": 12,
      "projects": 30
    },
    {
      "name": "Responsive Web Design",
      "price": 0,
      "assignments": 10,
      "projects": 28
    },
    {
      "name": "Node.js for Beginners",
      "price": 0,
      "assignments": 13,
      "projects": 36
    },
    {
      "name": "Frontend Development with Vue.js",
      "price": 0,
      "assignments": 11,
      "projects": 32
    }
  ]
  )
//Read
let a=db.Courses.find({price:0})    //output would be a json object
// console.log(a.count())
let b=db.Courses.findOne({price:0})    //output would be first json object with price 0

//Update
db.Courses.updateOne({name:"MongoDB"},{$set:{price:200}})    //first argument is the filter and second argument is the update
db.Courses.updateMany({price:0},{$set:{price:1000}})  

//Delete
db.Courses.deleteOne({name:"MongoDB"})    //deletes the first document with name MongoDB 
db.Courses.deleteMany({price:1000})


// https://www.mongodb.com/docs/manual/reference/operator/query/   //for more operators(such as condition ones)
//SUCH AS
db.Courses.find( { projects: { $eq: 36 } } )   //finds all documents with qty=20