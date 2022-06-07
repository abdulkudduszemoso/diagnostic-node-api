import express from "express";
import { PatientReports } from "../../app.js";
import { createReportSchema } from "../validators/report.validator.js";

const reportsRouter = express.Router();

reportsRouter.get('/', (req, res, next) => {
    PatientReports.findAll()
    .then((result) => {
        res.send(result);
    });
});

reportsRouter.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const report = await PatientReports.findByPk(id);
    if(report){
        res.send(report);
    }
    else{
        res.status(500).json({
            message: 'Report not available'
        });
    }
});

reportsRouter.post('/', createReportSchema, (req, res) => {
    PatientReports.create(req.body)
    .then(() => {
        res.status(200).json({
            message: 'Report added succussfully'
        });
    }).catch((err) => {
        res.status(500).json({
            message: 'Error while adding report'
        })
    })
})


export default reportsRouter;