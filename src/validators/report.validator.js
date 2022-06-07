import Joi from "joi"
import { ValidationHandler } from "../../utils/validation-handler.js";

export const createReportSchema = (req, res, next) => {
    const schema = Joi.object({
        labName: Joi.string().required(),
        testName: Joi.string().required(),
        reportStatus: Joi.string().required()
    });

    ValidationHandler(req, next, schema);
}