import express from "express";
import { DiagnosticUser } from "../../app.js";
import { createUserSchema } from "../validators/user.validator.js";

const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
    DiagnosticUser.findAll()
    .then((result) => {
        res.send(result);
    });
});

userRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await DiagnosticUser.findByPk(id);
    if(user){
        res.send(user);
    }
    else{
        res.status(500).json({
            message: 'User not found'
        })
    }
})

userRouter.post('/', createUserSchema, (req, res) => {
    DiagnosticUser.create(req.body)
    .then(() => {
        res.status(200).json({
            message: 'User added Successfully'
        });
    }).catch(() => {
        res.status(500).json({
            message: 'Error while addding user'
        });
    });

});



export default userRouter;