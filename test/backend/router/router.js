import  express  from "express";

import { addUser,login } from "../controller/userController.js";
const router = express.Router();

router.post("/user/create", addUser);
router.post("/user/login", login);
export default router;