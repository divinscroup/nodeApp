const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let con = db.db("mydb");

    con.collection("customers").find().limit(4).toArray(function (err, res) {
        if (err) throw err;
        res.forEach(function (re) {
           console.log(re._id, re.name, re.address);

        });
        db.close();
        });
});

// let query = {address: /^S/};
// let val = { $set: {name: "locus"}};
// con.collection("customers").updateMany(query, val, function (err, res) {
//     if (err) throw err;
//     console.log(res.result.nModified + ' record(s) updated!');


// let query = {address: "Valley 345"};
// let val = { $set: {name: "Mickey", address: "Canyon 123" }};
// con.collection("customers").updateOne(query, val, function (err, res) {
//     if (err) throw err;
//     console.log('1 record updated!');


// let query = {address: /^O/};
// con.collection("customers").deleteMany(query, function (err, res) {
//     if (err) throw err;
//     console.log(res.deletedCount + ' record deleted!');
//     db.close();
// });

//### drop collictions ###
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("customers").drop(function(err, delOK) {
//         if (err) throw err;
//         if (delOK) console.log("Collection deleted");
//         db.close();
//     });
// });
// let mySort = {name: -1}; { name: 1 } for ascending and{ name: -1 } for descending
// con.collection("customers").find().sort(mySort).toArray( function (err, res) {
// res.forEach(function (re) {
//     console.log("-".repeat(50));
//     console.log(re._id, re.name, re.address);
// });

// let query = {address: /^S/};
// con.collection("customers").find(query).toArray( function (err, res) {

// con.collection("customers").find(query, {_id: 0, name: 1}).toArray( function (err, res) {
// con.collection("customers").find({},{_id: 0,address:1}).toArray( function (err, res) {
//     if (err) throw err; ####always except _id : 0 if you want to hide it.####
//     console.log(res);
// let myobj = {name: "devian inc", address: "Highway 37"};
// con.collection("customers").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     console.log('1 document inserted!');
//     db.close();
// });
// let myobj = [{k1:'v1'},{k2:'v2'},...]
// con.collection("customers").insertMany(myobj, function (err, res) {
//     if (err) throw err;
//     console.log(res.insertedCount + " document(s) inserted !");