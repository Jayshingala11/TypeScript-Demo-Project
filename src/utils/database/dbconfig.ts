import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize("practical_test", "root", process.env.DB_PASS, {
  dialect: "mysql",
  host: "localhost",
  timezone: "+05:30",
  logging: false,
});

export default sequelize;
