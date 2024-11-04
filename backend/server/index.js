const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.use(express.json());

const userRoutes = require("../routes/userRoutes");
const { reportConsult } = require("../middlewares/authMw");
app.use(userRoutes);

app.use(express.json());
app.use(userRoutes);
app.use(reportConsult);

app.listen(3000, () => console.log("SERVIDOR ENCENDIDO en el puerto 3000"));