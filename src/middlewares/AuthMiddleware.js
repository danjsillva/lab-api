import JWT from "jsonwebtoken";

const AuthMiddleware = async (ctx, next) => {
  if (!ctx.request.header || !ctx.request.header.authorization)
    throw new Error("Token de autenticação é obrigatório");

  const [, token] = ctx.request.header.authorization.split(" ");

  try {
    ctx.auth = await JWT.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error("Token de autenticação inválido");
  }

  await next();
};

export default AuthMiddleware;
