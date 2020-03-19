import Mongoose from "mongoose";

const connect = async () => {
  try {
    await Mongoose.connect(process.env.MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  } catch (error) {
    throw new Error("Erro ao estabelecer uma conexão com o banco de dados");
  }
};

export default { connect };
