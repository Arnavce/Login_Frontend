import express from "express";
import SignUp from "./routes/signup"


const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());


app.use("/signup", SignUp);





export default app;