import express from "express";
import { userDetails } from "../Controller/userController.js";

const router=express.Router();

router.post("/user-remark",userDetails);

export default router;
