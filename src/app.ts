import express from "express";
require("dotenv").config();
import routes from "./routes/index";
import cors from "cors";
import morgan from "morgan";
const app = express();

const port = process.env.PORT || 4005;
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
