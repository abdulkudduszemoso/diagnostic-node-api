import express from "express";
import { Test } from "../../app.js";
import { createTestSchema } from "../validators/test.validator.js";

const testRouter = express.Router();

testRouter.get('/', (req, res, next) => {
    Test.findAll()
    .then((result) => {
        res.send(result);
    });
});

testRouter.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const test = await Test.findByPk(id);
    if(test){
        res.send(test);
    }
    else{
        res.status(500).json({
            message: 'Test not found'
        });
    }
})

testRouter.post('/', createTestSchema, (req, res) => {
    Test.create(req.body)
    .then(() => {
        res.status(200).json({
            message: 'Test added successfully'
        });
    })
    .catch(() => {
        res.status(500).json({
            message: 'Error while adding test'
        });
    });

});

export default testRouter;
