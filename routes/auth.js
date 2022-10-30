/*
	Rutas de Usuarios / Auth 
		host + /api/auth
*/

const { Router } = require("express")
// eslint-disable-next-line import/newline-after-import
const { check } = require("express-validator")
const router = Router()

const {
  crearUsuario,
  revalidarToken,
  loginUsuario,
} = require("./controllers/auth")

const { validarCampos } = require("../middlewares/validar-campos")

router.get("/", (req, res) => {
  res.json({
    ok: true,
  })
})

// endpoint validar usuario

router.post(
  "/",
  [
    // middelwares
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  loginUsuario
)

router.post(
  "/new",
  [
    // middlewares
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  crearUsuario
)

router.get("/renew", revalidarToken)

module.exports = router
