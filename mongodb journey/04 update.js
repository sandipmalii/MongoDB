db.inventory.updateOne(
    { item: "paper" },
    {
      $set: { "size.uom": "mm", status: "P" },
      $currentDate: { lastModified: true }
    }
 )

 db.inventory.find(
    { item: "paper" }
 )