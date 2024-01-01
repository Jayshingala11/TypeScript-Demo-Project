import path from "path";
import express, { Application } from "express";
// import expressHbs from "express-handlebars";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import sequelize from "./utils/database/dbconfig";
import indexRoutes from "./routes/indexRoutes";

const app: Application = express();

app.engine(
  "hbs",
  engine({
    layoutsDir: path.join(__dirname, "views/layouts/"),
    defaultLayout: "main",
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(indexRoutes);

const port = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running on port 3000!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
