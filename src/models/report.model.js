import { DataTypes } from "sequelize"

export const Reports = (sequelize) => {
    return sequelize.define('reports',{
        labName: DataTypes.STRING(25),
        testName: DataTypes.STRING(25),
        reportStatus: DataTypes.STRING(20)
    })
}