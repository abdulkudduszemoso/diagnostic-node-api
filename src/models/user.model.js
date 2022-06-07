import { DataTypes } from "sequelize"

export const User = (sequelize) => {
    return sequelize.define('user', {
        firstName: DataTypes.STRING(25),
        lastName: DataTypes.STRING(25),
        emailId: DataTypes.STRING(25),
        role: DataTypes.STRING(25),
        mobileNum: DataTypes.BIGINT,
    });
}