const database = 'test';
const collection = 'Shoes';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

//A3.
db.Shoes.insertMany([
    {
      "_id": 1,
      "brand": "Nike",
      "model": "Air Max 270",
      "color": "Black",
      "size": 10,
      "price": 120,
      "gender": "Men"
    },
    {
      "_id": 2,
      "brand": "Adidas",
      "model": "Ultra Boost",
      "color": "White",
      "size": 9,
      "price": 150,
      "gender": "Women"
    },
    {
      "_id": 3,
      "brand": "Puma",
      "model": "Suede Classic",
      "color": "Blue",
      "size": 8,
      "price": 80,
      "gender": "Unisex"
    },
    {
      "_id": 4,
      "brand": "Converse",
      "model": "Chuck Taylor All Star",
      "color": "Red",
      "size": 7,
      "price": 60,
      "gender": "Men"
    },
    {
      "_id": 5,
      "brand": "New Balance",
      "model": "Fresh Foam Arishi",
      "color": "Grey",
      "size": 8,
      "price": 90,
      "gender": "Women"
    },
    {
        "_id": 6,
        "brand": "Nike",
        "model": "Air Force 1",
        "color": "White",
        "size": 9,
        "price": 100,
        "gender": "Men"
      },
  ])
  
  //A3.
  db.Shoes.insertOne({
    "_id": 7,
    "brand": "Asics",
    "model": "GEL-Kayano 27",
    "color": "Blue",
    "size": 10,
    "price": 160,
    "gender": "Men",
    "category": "Running" //8th key-value pair
  })
  
//A4.
  db.Shoes.find();

  db.Shoes.findOne({ "_id": 2});
  db.Shoes.findOne({"model": "Chuck Taylor All Star"});

//A5.
db.Shoes.deleteOne({"_id": 7 });

//A6.
let deletedDoc = {
    "brand": "Asics",
    "model": "GEL-Kayano 27",
    "color": "Blue",
    "size": 10,
    "price": 160,
    "gender": "Men",
    "category": "Running"
  };
  
  db.Shoes.insertOne(deletedDoc);
  
  db.Shoes.findOne({ "_id": ObjectId("66014dd5026e2ea546b7e0ff") });
  db.Shoes.findOne({ "model": "GEL-Kayano 27" });

  //A7.
  db.Shoes.deleteMany({});

  db.Shoes.insertMany([
    {
      "_id": 1,
      "brand": "Nike",
      "model": "Air Max 270",
      "color": "Black",
      "size": 10,
      "price": 120,
      "gender": "Men",
      "material": {
        "upper": "Mesh",
        "sole": "Rubber"
      }
    },
    {
      "_id": 2,
      "brand": "Adidas",
      "model": "Ultra Boost",
      "color": "White",
      "size": 9,
      "price": 150,
      "gender": "Women",
      "material": {
        "upper": "Leather",
        "sole": "Boost"
      }
    },
    {
      "_id": 3,
      "brand": "Puma",
      "model": "Suede Classic",
      "color": "Blue",
      "size": 8,
      "price": 80,
      "gender": "Unisex",
      "material": {
        "upper": "Cotton",
        "sole": "Rubber"
      }
    },
    {
      "_id": 4,
      "brand": "Converse",
      "model": "Chuck Taylor All Star",
      "color": "Red",
      "size": 7,
      "price": 60,
      "gender": "Men",
      "material": {
        "upper": "Canvas",
        "sole": "Rubber"
      }
    },
    {
      "_id": 5,
      "brand": "New Balance",
      "model": "Fresh Foam Arishi",
      "color": "Grey",
      "size": 8,
      "price": 90,
      "gender": "Women",
      "material": {
        "upper": "Synthetic",
        "sole": "Foam"
      }
    },
    {
      "_id": 6,
      "brand": "Nike",
      "model": "Air Force 1",
      "color": "White",
      "size": 9,
      "price": 100,
      "gender": "Men",
      "material": {
        "upper": "Leather",
        "sole": "Rubber"
      }
    },
    {
        "_id": 7,
        "brand": "Asics",
        "model": "GEL-Kayano 27",
        "color": "Blue",
        "size": 10,
        "price": 160,
        "gender": "Men",
        "category": "Running",
        "material": {
          "upper": "Synthetic",
          "sole": "Foam"
        }
    }
  ])

//A8.
  db.Shoes.find();
  db.Shoes.find({ "material.sole": "Rubber" });
  db.Shoes.find({ "material.upper": "Cotton" });

//A9.
// Update document with _id 1
db.Shoes.update(
    { "_id": 1 },
    {
      $set: {
        "availability": [
          { "location": "Nike Website", "quantity": 30 },
          { "location": "Foot Locker", "quantity": 28 },
          { "location": "Amazon", "quantity": 32 }
        ]
      }
    }
  );
  
  // Update document with _id 2
  db.Shoes.update(
    { "_id": 2 },
    {
      $set: {
        "availability": [
          { "location": "Adidas Website", "quantity": 41 },
          { "location": "Amazon", "quantity": 24 },
          { "location": "Zappos", "quantity": 14 }
        ]
      }
    }
  );
  
  // Update document with _id 3
  db.Shoes.update(
    { "_id": 3 },
    {
      $set: {
        "availability": [
          { "location": "Puma Website", "quantity": 12 },
          { "location": "Amazon", "quantity": 20 },
          { "location": "Store Locator", "quantity": 20 }
        ]
      }
    }
  );
  
  // Update document with _id 5
  db.Shoes.update(
    { "_id": 5 },
    {
      $set: {
        "availability": [
          { "location": "New Balance Website", "quantity": 10 },
          { "location": "Amazon", "quantity": 19 },
          { "location": "Store", "quantity": 21 }
        ]
      }
    }
  );
  
  // Update document with _id 6
  db.Shoes.update(
    { "_id": 6 },
    {
      $set: {
        "availability": [
          { "location": "Nike Website", "quantity": 22 },
          { "location": "Foot Locker", "quantity": 27 }
        ]
      }
    }
  );
  
  // Update document with _id 7
  db.Shoes.update(
    { "_id": 7 },
    {
      $set: {
        "availability": [
          { "location": "Foot Locker", "quantity": 50 },
          { "location": "Asics Website", "quantity": 15 },
          { "location": "Amazon", "quantity": 23 }
        ]
      }
    }
  );

//A10.
// Documents with three-element arrays
db.Shoes.find({ "availability": { $size: 3 } });

// Documents with two-element arrays
db.Shoes.find({ "availability": { $size: 2 } });

// Documents with no arrays
db.Shoes.find({ "availability": { $exists: false } });

//A11.
db.Shoes.find({//element where location is foot locker and quantity greater than 30
    availability: {
      $elemMatch: {
        quantity: { $gt: 30},
        location: "Foot Locker"
      }
    }
  });

// To only include arrays that have particular location name
db.Shoes.find({//element where location is puma website
    availability: {
      $elemMatch: {
        location: "Puma Website"
      }
    }
  });

db.Shoes.find({//all arrays where any one or more element is greater than 40
    availability: {
      $elemMatch: {
        quantity: { $gt: 40}
      }
    }
  });
  
//A12.
db.Shoes.find()

db.Shoes.update(//increase by 10
    { "_id": 1 },
    { $inc: { "price": 10 } }
  );
  db.Shoes.update(//reverse
    { "_id": 1 },
    { $inc: { "price": -10 } }
  );
// For each
db.Shoes.updateMany({}, { $inc: { "price": 10 } });
db.Shoes.updateMany({}, { $inc: { "price": -10 } });

//A13.
db.Shoes.replaceOne(
    { "_id": 1 },//replace one with id 1
    { 
      "_id": 1,
      "brand": "Nike",
      "model": "Air Max Plus",//change model name
      "color": "Black",
      "size": 10,
      "price": 120,
      "gender": "Unisex",//change it to unisex from men
      "material": {
        "upper": "Mesh",
        "sole": "Rubber"
      },
      "availability": [
        {
          "location": "Nike Website",
          "quantity": 30
        },
        {
          "location": "Foot Locker",
          "quantity": 28
        },
        {
          "location": "Amazon",
          "quantity": 32
        }
      ]
    }
  );
  
  db.Shoes.find()

//A14.
  db.Shoes.updateOne(
    { "_id": 1 },
    { $unset: { "color": "" } }//Removes the color field
  );
// Putting back
  db.Shoes.updateOne(
    { "_id": 1 }, 
    { $set: { "color": "Black" } } 
  );
  
//A15.
db.Shoes.insertOne({
    "brand": "Reebok",
    "model": "Classic Leather",
    "color": "White",
    "size": 9,
    "price": 80,
    "gender": "Men",
    "material": {
      "upper": "Leather",
      "sole": "Rubber"
    }
});

// Search the document
db.Shoes.findOne({ "_id": ObjectId("6608a4ff528806c0fe98172c") });

// Delete the document
db.Shoes.deleteOne({ "_id": ObjectId("6608a4ff528806c0fe98172c") });

 db.Shoes.updateOne(
  { "_id": 3 },
  { "$set": { "gender": "Women" } }
)
//A16.
///Group documents by gender and calculate count, avg price, min and max price
db.Shoes.aggregate([
{
$group: {
_id: "$gender",
count: { $sum: 1 },
average_price: { $avg: "$price" },
min_price: { $min: "$price" },
max_price: { $max: "$price" }
}
}
])

//A17. - years since release
db.Shoes.aggregate([
{
$project: {
_id: 1,
brand: 1,
model: 1,
"Years since release": {
$subtract: [{ $year: new Date() },{ $year: "$release_date" }
]
}
}
}
]);

//A18. -Show price only if it is greater than $100
db.Shoes.aggregate([
{
$project: {
brand: 1,
model: 1,
size: 1,
gender: 1,
material: 1,
price: {
$cond: {
if: { $gt: ["$price", 100] }, // Condition: price greater than $100
then: "$price", // Show price if condition is true
else: "$$REMOVE" // Remove price if condition is false
}
}
}
}
]);

//A19-Sort the documents based on the gender and model alphabetically
db.Shoes.aggregate([
{ $sort: { gender: 1, model: 1 } }
]);


//A20.
db.Shoes.find({_id:1});

//Add an Element with $push

db.Shoes.updateOne(
{ "_id": 1 },
{
$push: {
"availability": {
"location": "eBay",
"quantity": 15
}
}
}
);

//remove the newly added record

db.Shoes.updateOne(
{ "_id": 1 },
{
$pull: {
"availability": {
"location": "eBay",
"quantity": 15
}
}
}
);

//now we will add it again using the addToset

db.Shoes.updateOne(
{ "_id": 1 },
{
$addToSet: {
"availability": {
"location": "eBay",
"quantity": 15
}
}
}
);


