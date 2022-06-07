import Joi from "joi"
import { ValidationHandler } from "../../utils/validation-handler.js";

export const createTestSchema = (req, res, next) => {
    const schema = Joi.object({
        testName: Joi.string().required(),
        testPrice: Joi.string().required()
    });

    ValidationHandler(req, next, schema);
}