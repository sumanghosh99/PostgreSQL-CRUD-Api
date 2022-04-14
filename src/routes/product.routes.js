const express=require("express");
const router=express.Router();

const {createProduct,getUsers,deleteUser,getUserById,updateUserById}=require("../controllers/product.controller");


router.route("/product/:id").put(updateUserById).delete(deleteUser);


router.get("/",getUsers);
router.get("/:id",getUserById);
router.post("/product",createProduct);
//router.put("/product/:id",updateUserById);
//router.delete("/product/:id",deleteUser);


module.exports=router;