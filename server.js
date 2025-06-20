import express from 'express';
import cors from 'cors';
import { checkConnection } from './Config/db.js';
import { createAllTable } from './Utils/dbutils.js';
import userRoutes from "./Routes/userRoutes.js"
const app = express();
app.use(express.json());
app.use("/api/user",userRoutes)
app.get("/", (req, res) => {
    res.send("This is Get /");
})
app.listen(4000, async () => {
    console.log("Server is running on port 4000");
    try {
        await checkConnection();
        await createAllTable();
    }
    catch (error) {
        console.log('failed', error);
 
    }
})
app.use(cors());

