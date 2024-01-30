import express from 'express';
import cors from 'cors';
import sequelize from "../config/dbconfig.js";
import router from '../router/router.js';
const app = express();

app.use(cors());

app.use(express.json());
app.use('/api',router)
await sequelize.sync();
app.listen(3030,() => {
    console.log('Server is running on port 3030');
});
