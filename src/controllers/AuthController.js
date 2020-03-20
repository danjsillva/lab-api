import AuthService from "../services/AuthService";

const signup = async ctx => {
  const data = ctx.request.body;

  if (!data.email)
    throw {
      status: 400,
      code: "EMAIL_REQUIRED",
      message: "Email é obrigatório"
    };
  if (!data.password)
    throw {
      status: 400,
      code: "PASSWORD_REQUIRED",
      message: "Password é obrigatório"
    };

  const auth = await AuthService.signup({ data });

  ctx.body = auth;
};

const login = async ctx => {
  const { email, password } = ctx.request.body;

  if (!email)
    throw {
      status: 400,
      code: "EMAIL_REQUIRED",
      message: "Email é obrigatório"
    };
  if (!password)
    throw {
      status: 400,
      code: "PASSWORD_REQUIRED",
      message: "Password é obrigatório"
    };

  const auth = await AuthService.login({ email, password });

  ctx.body = auth;
};

export default { signup, login };
