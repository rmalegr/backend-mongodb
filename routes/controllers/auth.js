const { response } = require("express")
const Usuario = require("../../models/Usuario")
// eslint-disable-next-line consistent-return

// eslint-disable-next-line consistent-return
const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body

  try {
    let usuario = await Usuario.findOne({ email })
    console.log(usuario)

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "ya existe un usuario con ese correo",
      })
    }
    usuario = new Usuario(req.body)

    await usuario.save()

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      ok: false,
      msg: "por favor hable con el administrador",
    })
  }
}

// eslint-disable-next-line consistent-return
const loginUsuario = (req, res) => {
  const { name, password } = req.body

  res.status(201).json({
    ok: true,
    msg: "login",
    name,
    password,
  })
}
const revalidarToken = (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  })
}

module.exports = {
  crearUsuario,
  revalidarToken,
  loginUsuario,
}
