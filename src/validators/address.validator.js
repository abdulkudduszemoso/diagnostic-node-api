import { ValidationHandler } from "../../utils/validation-handler.js";
import Joi from "joi";

export const createAddressSchema = (req, res, next) => {
    
    const schema = Joi.object({
        houseNo: Joi.string(),
        area: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        zip: Joi.string(),
        userId: Joi.string()
    });
    ValidationHandler(req, next, schema);
}