const axios = require("axios");
const cron = require("node-cron");
const usernames = require("./usernames");

const checkUsername = async (username) => {
  try {
    const url = `https://www.instagram.com/${username}`;
    const response = await axios.get(url);

    if (response.status === 200) {
      console.log(`${username} boo!`);
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log(`${username} is available!`);
    } else {
      console.error(`Error checking ${username}:`, error.message);
    }
  }
};

cron.schedule("*/1 * * * *", async () => {
  const checks = usernames.map((name) => checkUsername(name));
  await Promise.all(checks);
});
