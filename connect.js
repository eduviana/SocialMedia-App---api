import mysql from "mysql"


export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2271460175",
    database: "social"
})