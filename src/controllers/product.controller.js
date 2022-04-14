const db = require("../config/database");
const createProduct = async (req, res) => {
  const {email,password} = req.body;
  const user = await db.query(
    'INSERT INTO users (email, password) VALUES ($1,$2)',
    [email, password]
  );
  res.json(user.rows);
 
};

const getUsers=async (req,res)=>{
  const users=await db.query(
    'SELECT * FROM users ORDER BY email ASC'
  );
  res.json(users.rows);
}

const getUserById=async(req,res)=>{
  const productId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM users WHERE id = $1', [productId]);
  res.status(200).send(response.rows);
}

const updateUserById=async(req,res)=>{
  const productId = parseInt(req.params.id);
  const {email,password} = req.body;

  const response = await db.query(
    "UPDATE users SET email= $1, password= $2 WHERE id = $3",
    [email,password,productId]
  );

  res.status(200).send({ message: "Product Updated Successfully!" });
}


const deleteUser=async (req,res)=>{
  const productId = parseInt(req.params.id);
  await db.query('DELETE FROM users WHERE id = $1', [
    productId
  ]);

  res.status(200).send({ message: 'Product deleted successfully!', productId });
}

module.exports={createProduct,getUsers,deleteUser,getUserById,updateUserById};