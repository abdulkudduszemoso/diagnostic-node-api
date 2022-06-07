import { DataTypes } from "sequelize";

export const LabTest = (sequelize) => {
   return sequelize.define('lab', { 
        labName: DataTypes.STRING(25),
        labLocation: DataTypes.STRING(25),
        labRating: DataTypes.DOUBLE,
        slotsAvailable: DataTypes.INTEGER,
     });
}