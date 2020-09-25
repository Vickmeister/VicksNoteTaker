const express = require("express");
const apiRoutes = require("./routes/apiroute.js");
const htmlRoutes = require("./routes/htmlroute.js");

const app = express();

const port = process.env.port || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(port, () => console.log(`listening on port: ${port}`));
