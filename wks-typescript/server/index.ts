import { sequelize } from "./src/db";
import app from "./src/server";

sequelize
  .sync({ force: true, logging: false })
  .then(() => {
    console.log("Database in Sync");
    app.listen(3001, () => console.log("App is listening on port 3001!"));
  })
  .catch((err) => console.error(err));
