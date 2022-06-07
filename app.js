import express from "express";
import labRouter from "./src/controllers/lab.controller.js";
import { LabTest } from "./src/models/lab.model.js";
import bodyParser from 'body-parser';
import { errorHandler, notFoundError, notFoundErrorHandler } from "./utils/error-handler.js";
import LabTestsName from "./src/models/test.model.js";
import testRouter from "./src/controllers/test.controller.js";
import { User } from "./src/models/user.model.js";
import { Address } from "./src/models/address.model.js";
import userRouter from "./src/controllers/user.controller.js";
import addressRouter from "./src/controllers/address.controller.js";
import { connection } from "./utils/db.connection.js";
import { Reports } from "./src/models/report.model.js";
import reportsRouter from "./src/controllers/report.controller.js";

const app = express();

export const Lab = LabTest(connection);
export const Test = LabTestsName(connection);
export const DiagnosticUser = User(connection);
export const PatientAddress = Address(connection);
export const PatientReports = Reports(connection);

DiagnosticUser.hasMany(PatientAddress);


connection.sync({ alter: true });

// Middlewares
app.use(errorHandler);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Routes
app.use('/labs', labRouter);
app.use('/tests', testRouter);
app.use('/users', userRouter);
app.use('/address', addressRouter);
app.use('/reports', reportsRouter);

//Error Handler
app.use(notFoundError);
app.use(notFoundErrorHandler);

export default app;