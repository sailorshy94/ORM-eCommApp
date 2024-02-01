// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongsToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {

});
// Tags belongsToMany Products (through ProductTag)
Tag.belongsToMany(Product, {

});

// products and tags belongToMany will be many to many relationship - ck zoom recording for A's example

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
