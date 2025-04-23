const app = require("./index");

module.exports = (req, res) => {
  if (req.method === "POST") {
    return app(req, res);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
