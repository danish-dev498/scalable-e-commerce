import express from "express";
import { sequelize } from "./models/index.js";
const app = express();

import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

// Sync the models with the database

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", userRoutes);

sequelize.sync().then(() => {
  console.log("Database synced");
});

app.use(errorHandler);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
