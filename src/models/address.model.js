import { DataTypes } from "sequelize"

export const Address = (sequelize) => {
   return sequelize.define('address', {
       houseNo: DataTypes.STRING(25),
       area: DataTypes.STRING(25),
       city:DataTypes.STRING(25),
       state: DataTypes.STRING(25),
       zip: DataTypes.INTEGER(5),
       userId: DataTypes.INTEGER
   })
}