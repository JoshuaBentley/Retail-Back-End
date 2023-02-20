// import models
const Products = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'category_id',
})

// Categories have many Products
Category.hasMany(Products, {
  foreignKey: 'category_id',
   onDelete: 'CASCADE',
})

// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'category_id',
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products, {
  through: ProductTag,
  foreignKey: 'category_id',
})

module.exports = {
  Products,
  Category,
  Tag,
  ProductTag,
};
