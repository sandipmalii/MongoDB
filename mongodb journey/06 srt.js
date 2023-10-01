


db.inventory.find().sort({ qty: 1 }) // increassing order
db.inventory.find().sort({ qty: -1 }) // decending order


db.inventory.find().skip(1) // skips first doc
db.inventory.find().skip(2) // skips first 2 doc


db.inventory.find().limit(4) //limits the no of doc in the o/p




