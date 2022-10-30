/* eslint-disable no-console */
const mongoose = require("mongoose")

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("DB Online")
  } catch (error) {
    console.log(error)
    throw new Error("Erro en la conexion a la BD")
  }
}

module.exports = {
  dbConnection,
}
