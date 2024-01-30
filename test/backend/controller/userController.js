import User from "../model/User.js";
export const addUser = async (req, res) => {
  const { userName, pwd, email } = req.body;
  const username = userName
  const password = pwd
  const user = await User.create({username , password, email });
  res.status(200).json(user);
};
export const login = async (req, res) => {
  const { userName, userpwd } = req.body;
  const username = userName
  const user = await User.findOne({ where : { username } });
  if(!user) return res.status(404).json({message:'User not found',loginStatus: false});
  let userStatus = user.password == userpwd
  if(!userStatus) return res.status(404).json({message:'User not found',loginStatus: false});
  res.status(200).json({message:'Login successful',loginStatus: true});
}