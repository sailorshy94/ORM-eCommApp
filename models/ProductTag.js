const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      // foreign key references product(id)
      references: {
        model: "products", 
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      // foreign key references tag(id)
      references: {
        model: "tags", 
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'product_tag',
  });

module.exports = ProductTag;
