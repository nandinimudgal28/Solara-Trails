import UserModel from "../Model/userModel.js";
import { userQuery } from "../Service/userService.js";

export const userDetails=async(req,res)=> {
    const {name,email,destination,remark}=req.body;
    const user=new UserModel({name,email,destination,remark})
    try{
        const response=await userQuery(user)

    if(response.success){
            return res.status(200).json(response);
        } else{
            return res.status(400).json(response);
        }
    } catch (error) {
        return {success:false,message:"Registration failed"};
    }
}