import {DataTypes, Model} from 'sequelize';
import sequelize from '../connection/database';

export class Seller extends Model {}

Seller.init({
   name: {
   type: DataTypes.STRING,
   allowNull: false
   }
  }, {
   sequelize,
   modelName: 'Names' 
});