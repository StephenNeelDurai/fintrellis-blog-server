require("dotenv").config();
const app = require("./app");
const db = require("./models");
const logger = require("./utils/logger");

const PORT = process.env.PORT || 3001;

async function start() {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync({ alter: true }); // in prod use migrations
    app.listen(PORT, () => logger.info(`Server running on ${PORT}`));
  } catch (err) {
    logger.error("Failed to start", err);
    process.exit(1);
  }
}

start();
