import mysql from 'mysql2';

// Create a connection to the database
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeems"
});

// Connect to the database
con.connect(function(err) {
    if (err) {
        console.error("Connection error: ", err.message);
        return;
    }
    console.log("Connected to the MySQL server.");
});

export default con;
