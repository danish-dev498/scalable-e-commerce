import { Sequelize, DataTypes } from "sequelize";

import { sequelize } from "./index.js";

const User = sequelize.define("User", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncremENT: true,
//     allowNull: false,
//     primaryKey: true,
//   },
  // name: Sequelize.STRING,
  email: DataTypes.STRING,
  username: DataTypes.STRING,
});

export default User;
