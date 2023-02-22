const router = require('express').Router();
const { Category, Products, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    const inventoryData = await Category.findAll({
      include: [{model: Products, through: ProductTag, as: 'Products'}]
    });
    res.status(200).json(inventoryData);  
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try{
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{model: Products, through: ProductTag, as: 'Products'}]
    })

    if(!categoryById) {
      res.status(404).json({ message: 'No Category with this ID'})
      return 
    }

    res.status(200).json(categoryById);
  } catch (err) {
    res.status(500 ).json(err);
  }
});

router.post('/', async (req, res) => {
  try{
    const newCategory = await Category.create({
      category_id: req.body.category_id,
      category_name: req.body.category_name
    })
    res.status(200).json(newCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try{
    const updateCategory = await Category.update(
      {category_name: req.body.category_name},
      {where: {category_id: req.params.id}}
      )
    res.status(200).json(updateCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async(req, res) => {
  try{
    const deleteCategory =  await Category.destroy({
      where: {
        category_id: req.params.id
      }
      })
    res.status(200).json(deleteCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
