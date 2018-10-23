DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(255) NOT NULL,
price DECIMAL(13,2) NOT NULL,
stock_quantity INTEGER(10),
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Computer Mouse", "Electronics", 9.99, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Shampoo", "Cosmetics", 4.99, 250);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Soccer Ball", "Sports", 9.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Flip-flops", "Shoes", 2.99, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Computer Monitor", "Electronics", 299.99, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Deoderant", "Cosmetics", 3.99, 75);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Badiddas Shoes", "Shoes", 49.99, 45);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Football", "Sports", 20.99, 65);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Cellphone", "Electronics", 649.99, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Shaving Cream", "Cosmetics", 4.99, 100);