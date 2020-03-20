import Mongoose from "mongoose";

const connect = async () => {
  try {
    await Mongoose.connect(process.env.MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  } catch (error) {
    throw {
      status: 555,
      code: "DATABASE_CONNECTION_ERROR",
      message: "Erro ao estabelecer uma conexão com o banco de dados"
    };
  }
};

export default { connect };
