import { DataTypes } from "sequelize"

export const Patient = (sequelize) => {
    return sequelize.define('patient', {
        userId: DataTypes.INTEGER,
        patientName: DataTypes.STRING(25),
        dob: DataTypes.STRING(25),
        relation: DataTypes.STRING(25),
        gender: DataTypes.STRING(25)
    })
}