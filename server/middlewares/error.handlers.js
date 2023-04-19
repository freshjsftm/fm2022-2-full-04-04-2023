const { ValidationError, UniqueConstraintError } = require("sequelize");

module.exports.errorValidateHandle = async (err, req, res, next) => {
  console.log(err.message)
  if (err instanceof UniqueConstraintError) {
    return res.status(409).send({
      errors: [{ title: err.message }],
    });
  }
  if (err instanceof ValidationError) {
    return res.status(400).send({
      errors: [{ title: err.message }],
    });
  }
  next(err);
};

module.exports.errorHandle = async (err, req, res, next) => {
  console.dir(err)
  const status = err.status || 500;
  res.status(status).send({
    errors: [{ title: err.message || 'Server error!' }],
  });
};
