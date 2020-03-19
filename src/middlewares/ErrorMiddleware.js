const ErrorMiddleware = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);

    ctx.status = 500;
    ctx.body = {
      error: {
        message: error.message,
        type: error.name
      }
    };
  }
};

export default ErrorMiddleware;
