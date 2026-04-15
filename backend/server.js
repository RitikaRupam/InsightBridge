const express = require("express");
const cors = require("cors");

const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/feedback", feedbackRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
