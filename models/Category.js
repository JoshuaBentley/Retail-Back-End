const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  // this is defining columns
  {
    cat_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    short_Sleeve: {
      type: DataTypes.STRING,
      allowNull: false
    },
    long_Sleeve: {
      type: DataTypes.STRING,
      allowNull: false
    },
    graphiic_Tee: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shorts: {
      type: DataTypes.STRING,
      allowNull: falase
    },
    jeans: {
      type: DataTypes.STRING, 
      allowNull: falase
    },
    outer_wear: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
