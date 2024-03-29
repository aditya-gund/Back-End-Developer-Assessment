const express = require("express");
const router = express.Router();
const authenticateToken = require("./authMiddleware");

router.get("/secure", authenticateToken, (req, res) => {
  res.json({ message: "This is a secure endpoint for authenticated users only." });
});

module.exports = router;
