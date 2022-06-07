import { DataTypes } from "sequelize"

const LabTestsName = (sequelize) => {
    return sequelize.define('test',{
        testName: DataTypes.STRING(25),
        testPrice: DataTypes.STRING(25)
    })
}

export default LabTestsName;