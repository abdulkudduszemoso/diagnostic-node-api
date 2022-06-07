import { ValidationHandler } from "../../utils/validation-handler.js";
import Joi from "joi";

export const createLabSchema = (req, res, next) => {
    const schema = Joi.object({
        labName: Joi.string().required(),
        labLocation: Joi.string().required(),
        labRating: Joi.string().required(),
        slotsAvailable: Joi.string().required()
    });
    ValidationHandler(req, next, schema);
}