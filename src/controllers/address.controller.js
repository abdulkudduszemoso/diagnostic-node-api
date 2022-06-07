import express from "express";
import { PatientAddress } from "../../app.js";
import { createAddressSchema } from "../validators/address.validator.js";

const addressRouter = express.Router();

addressRouter.get('/', (req, res, next) => {
    PatientAddress.findAll()
    .then((result) => {
        res.send(result);
    });
});

addressRouter.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const address = PatientAddress.findByPk(id);
    if(address){
        res.send(address);
    }
    else{
        res.status(500).json({
            message: 'Address not found'
        });
    }
});

addressRouter.post('/', createAddressSchema, (req, res) => {
    PatientAddress.create(req.body)
    .then(() => {
        res.status(200).json({
            message: 'Address added succussfully'
        });
    }).catch(() => {
        res.status(500).json({
            message: 'User not available'
        })
    })
})

export default addressRouter;