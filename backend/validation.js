const Joi = require("@hapi/joi")

//Register Validation
const registerValidation = (data) => {
    const schema =
        Joi.object({
            firstName: Joi.string().min(6).required(),
            lastName: Joi.string().min(6).required(),
            email: Joi.string().min(6).email().required(),
            password: Joi.string().min(6).required(),
        });
    return schema.validate(data)
}

//Login Validation
const loginValidation = (data) => {
    const schema =
        Joi.object({
            email: Joi.string().min(6).email().required(),
            password: Joi.string().min(6).required(),
        });
    return schema.validate(data)
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
