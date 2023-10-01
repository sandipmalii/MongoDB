db.inventory.find() //-Fetch all the document
db.inventory.find({qty:30})

// Specify AND Conditions
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

//OR Conditions
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )


//Specify AND as well as OR Conditions
db.inventory.find( {
    status: "A",
    $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
} )



