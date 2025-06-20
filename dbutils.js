import { pool } from "../Config/db.js";

const userTableQuery = 'CREATE TABLE IF NOT EXISTS User (id int primary key auto_increment,name varchar(255),email varchar(255),destination varchar(255), remark varchar(1000), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP );'
const createTable = async (tableName, query) => {
    try {
        await pool.query(query)
        console.log(`${tableName} table created or already exsists`)
    } catch (error) {
        console.log(`Error creating ${tableName}`, error);

    }
}
const createAllTable = async () => {
    try {

        await createTable("user", userTableQuery);

    } catch (error) {

    }
}
export { createAllTable }