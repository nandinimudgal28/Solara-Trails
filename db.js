import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "NandiniAayush2811",
    database: "SolaraTrails",
    connectionLimit: 10,
    queueLimit: 0,
    waitForConnections: true,
});

const checkConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log("DB connected");

        connection.release();
    } catch (error) {
        console.error("Error connecting to DB:", error);
    }
};
export {pool,checkConnection}