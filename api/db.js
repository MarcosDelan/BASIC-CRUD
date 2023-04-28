import mysql from "mysql";

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Enterprise2008',
    database: 'crud'
});