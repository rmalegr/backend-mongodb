const { response } = require("express")
const { validationResult } = require("express-validator")

// eslint-disable-next-line consistent-return, default-param-last
const validarCampos = (req, res = response, next) => {
  // manejo de errores
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    })
  }
  next()
}

module.exports = {
  validarCampos,
}
