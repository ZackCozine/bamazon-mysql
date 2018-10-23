var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log("===============================")
    showProducts();
});

function showProducts() {

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (let record in res) {
            let product = res[record]

            console.log("Product ID: " + product.item_id);
            console.log("Product Name: " + product.product_name);
            console.log("Department Name: " + product.department_name);
            console.log("Price: " + product.price);
            console.log("Stock: " + product.stock_quantity);
            console.log("===============================");
        };
        purchasePrompt();
    });
};

function purchasePrompt() {
    inquirer.prompt([
        {
            type: "input",
            message: "What Item Would You Like to Purchase? (ID)",
            name: "itemID"
        },
        {
            type: "input",
            message: "How Many Would You Like to Purchase?",
            name: "amount"
        }
    ])
        .then(function (userRes) {
            connection.query("SELECT stock_quantity, price FROM products WHERE item_id =" + userRes.itemID, function (err, res) {
                if (err) throw err;
                // console.log(res[0].product_name);

                if (userRes.amount <= res[0].stock_quantity) {

                    var newStock = res[0].stock_quantity - userRes.amount;
                    var cost = userRes.amount * res[0].price;
                    console.log("The Cost of Your Order is: $" + cost);
                    console.log("There are " + newStock + " left.");

                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [{ stock_quantity: newStock },
                        { item_id: userRes.itemID }],
                        function (err, res) {
                            if (err) throw err;

                            connection.end();
                        }
                    );
                }
                else {
                    console.log("Insufficient Stock");
                    console.log("There are " + res[0].stock_quantity + " left.");
                    connection.end();
                };
            });
        })
}