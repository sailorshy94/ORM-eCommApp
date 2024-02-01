// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      // validate that integer value is decimal
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      // validate that it is a numeric value
      validate: {
        isInt: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      // foreign key references category(id)
      references: {model: "category", key: "id"}
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'product',
  }
);

module.exports = Product;
