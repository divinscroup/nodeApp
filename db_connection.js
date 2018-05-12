
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "123456",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Database connected!');
    let adr = "Mountain 21";
    let name = "Amy";

    let sql = "SELECT * FROM customers LIMIT 2,5";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

    });
});
// The numbers are reversed: "LIMIT 2, 5" is the same as "LIMIT 5 OFFSET 2"
    // let sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345' ";
    //     console.log(result.affectedRows + " Record(s) updated !");
    // let sql = "DELETE FROM customers WHERE address = "+ mysql.escape(adr);
    //     console.log(result.affectedRows + " Record deleted !");
    // let sql = "DROP TABLE IF EXISTS customers";
    // let sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr);
    // let sql = "SELECT * FROM customers ORDER BY name DESC";
    // let sql = "SELECT * FROM customers WHERE address = ? OR  name = ?";
    //
    // con.query(sql, [adr, name], function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //
    // });
    // let sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
    //
    // con.query(sql,function (err, result) {
    //     if (err) throw err;
    //     console.log('1 recored inserted ! ID: ' + result.insertId);
    //
    // });
    // let sql = "INSERT INTO customers (name, address) VALUES ?";
    // let values = [
    //     ['John', 'Highway 71'],
    //     ['Peter', 'Lowstreet 4'],
    //     ['Amy', 'Apple st 652'],
    //     ['Hannah', 'Mountain 21'],
    //     ['Michael', 'Valley 345'],
    //     ['Sandy', 'Ocean blvd 2'],
    //     ['Betty', 'Green Grass 1'],
    //     ['Richard', 'Sky st 331'],
    //     ['Susan', 'One way 98'],
    //     ['Vicky', 'Yellow Garden 2'],
    //     ['Ben', 'Park Lane 38'],
    //     ['William', 'Central st 954'],
    //     ['Chuck', 'Main Road 989'],
    //     ['Viola', 'Sideway 1633']
    // ];
    // con.query(sql, [values],function (err, result) {
    //     if (err) throw err;
    //     console.log( result.affectedRows +' records inserted!');
    //
    // });
    // let sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'jully St 32')";
    // let sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    // let sql = "CREATE TABLE IF NOT EXISTS customers(name VARCHAR(250), address VARCHAR(250))";
    // let sql = "CREATE DATABASE IF NOT EXISTS myDB";
    // con.query(sql,function (err) {
    //     if (err) throw err;
    //     console.log('Table created!');
    //
    // });
// #### JOIN ####//

// users
//     [
//     { id: 1, name: 'John', favorite_product: 154},
//         { id: 2, name: 'Peter', favorite_product: 154},
//         { id: 3, name: 'Amy', favorite_product: 155},
//         { id: 4, name: 'Hannah', favorite_product:},
//         { id: 5, name: 'Michael', favorite_product:}
//     ]
// products
//     [
//     { id: 154, name: 'Chocolate Heaven' },
//         { id: 155, name: 'Tasty Lemons' },
//         { id: 156, name: 'Vanilla Dreams' }
//     ]
// join => sql = "SELECT users.name AS user, products.name AS favorite
// FROM users JOIN products ON users.favorite_product = products.id";

// left join => sql = "SELECT users.name AS user, products.name AS favorite
// FROM users LEFT JOIN products ON users.favorite_product = products.id";
// query all users.

// right join => sql = "SELECT users.name AS user, products.name AS favorite
// FROM users RIGHT JOIN products ON users.favorite_product = products.id";
// query all products.