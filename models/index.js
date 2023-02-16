// import models
const Products = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'cat_id',
})

// Categories have many Products
Category.hasMany(Products, {
  foreignKey: 'cat_id',
   onDelete: 'CASCADE'
})

// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tag, {
  foreignKey: 'cat_id',
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  foreignKey: 'cat_id',
})

module.exports = {
  Products,
  Category,
  Tag,
  ProductTag,
};
