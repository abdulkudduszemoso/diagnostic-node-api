export const ValidationHandler = (req, next, schema) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
        next(`Validation Error  ${error.details.map(x => x.message).join(', ')}`);
    }
    else {
        req.body = value;
        next();
    }
}