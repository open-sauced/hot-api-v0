const path = require("path");
const fs = require("fs");
const axios = require("axios");
const BASE_URL = process.env.BASE_URL

const filePath = path.join(__dirname, "../public/hot.json");

const main = async () => {
  const { data } = await axios.get(BASE_URL, {
    headers: { Accept: "application/json" },
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

main().then(() => console.log("Done."));