import express from "express";
import { Lab } from "../../app.js";
import { createLabSchema } from "../validators/lab.validator.js";

const labRouter = express.Router();

labRouter.get('/', (req, res) => {
    Lab.findAll()
        .then((result) => {
            res.send(result);
        });
});

labRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const lab = await Lab.findByPk(id);
    if (lab) {
        res.send(lab);
    }
    else {
        res.status(500).json({
            message: 'Lab not found'
        })
    }
})

labRouter.post('/', createLabSchema, (req, res) => {
    Lab.create(req.body)
    .then(() => {
        res.status(200).json({
            message: 'Added Successfully'
        });
    })
    .catch(() => {
        res.status(500).json({
            message: 'Error while adding lab'
        });
    });

});



export default labRouter;