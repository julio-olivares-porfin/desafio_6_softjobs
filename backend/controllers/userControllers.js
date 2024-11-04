const pool = require("../config/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const registerUser = async (usuario) => {
  let { email, password, rol, lenguage } = usuario;
  const passwordEncriptada = bcrypt.hashSync(password);
  password = passwordEncriptada;
  const values = [email, passwordEncriptada, rol, lenguage];
  const consulta = "INSERT INTO usuarios values (DEFAULT, $1, $2, $3, $4)";
  await pool.query(consulta, values);
};


const verifyCredentials = async (email, password) => {
  const values = [email];
  const consulta = "SELECT * FROM usuarios WHERE email = $1";
  const {
    rows: [usuario],
    rowCount,
  } = await pool.query(consulta, values);
  const { password: passwordEncriptada } = usuario;
  const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada);
  if (!passwordEsCorrecta || !rowCount)
    throw { code: 401, message: "Email o contraseña incorrecta" };
  return usuario;
};


const getUsers = async (email) => {
  const { rows } = await pool.query(
    "SELECT email, rol, lenguage FROM usuarios WHERE email = $1",
    [email]
  );
  if (!rows.length) throw { code: 404, message: "Usuario no encontrado" };
  return [rows[0]];
};

module.exports = { registerUser, verifyCredentials, getUsers };