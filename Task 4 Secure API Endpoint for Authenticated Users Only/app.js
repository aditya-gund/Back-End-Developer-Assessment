const express = require("express");
const secureRoute = require("./secureRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", secureRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
