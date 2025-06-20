import { pool } from "../Config/db.js";
export const userQuery = async (user) => {
    try {
        const query = "insert into user(name,email,destination,remark) values (?,?,?,?)";
        const values = [user.name, user.email, user.destination, user.remark];

        await pool.query(query, values);

        return { success: true, message: "Feedback considered" }
    }
    catch (error) {
        return { success: false, message: "Error in considering feedback" }
    }
};