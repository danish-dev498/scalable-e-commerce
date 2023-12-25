import { Sequelize } from "sequelize";

const sequelize = new Sequelize("e-commerce", "root", "9939876310@Dd", {
  dialect: "mysql",
  host: "localhost",
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// import  User  from "./user.models.js";

export { sequelize };
