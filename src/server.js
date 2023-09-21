const express = require("express");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

// get the client
const mysql = require("mysql2");

const app = express(); // app express
const port = process.env.PORT || 8080; // port
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// khai báo route
app.use("/", webRoutes);

// test connection
// create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "123456",
    database: "hoidanit",
});

// simple query
connection.query("SELECT * FROM Users u", function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
    console.log(err);
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
