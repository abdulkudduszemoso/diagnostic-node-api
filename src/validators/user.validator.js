import Joi from "joi"
import { ValidationHandler } from "../../utils/validation-handler.js";

export const createUserSchema = (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        emailId: Joi.string(),
        role: Joi.string().required(),
        mobileNumber: Joi.string()
    });

    ValidationHandler(req, next, schema);
}