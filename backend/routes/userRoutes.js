const express = require("express");
const {
  registerUser,
  verifyCredentials,
  getUsers,
} = require("../controllers/userControllers");
const {
  authMw,
  reportConsult,
} = require("../middlewares/authMw");
const jwt = require("jsonwebtoken");

const router = express.Router();



router.post("/usuarios", reportConsult, async (req, res) => {
  try {
    const usuario = req.body;
    await registerUser(usuario);
    res.send("Usuario registrado con éxito");
  } catch (error) {
    res.status(500).send(error);
  }
});


router.post("/login", reportConsult, async (req, res) => {
  try {
    const { email, password } = req.body;
    await verifyCredentials(email, password);
    const token = jwt.sign({ email }, "my_password", { expiresIn: 600 });
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
});


router.get("/usuarios", authMw, reportConsult, async (req, res) => {
  try {
    const { email } = req.user;
    const user = await getUsers(email);
    res.status(200).json(user);
  } catch (error) {
    res
      .status(error.code || 500)
      .send({ message: error.message || "Error en el servidor" });
  }
});

module.exports = router;