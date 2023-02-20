const router = require('express').Router();
const { Tag, Products, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    const allTag = await Tag.findAll({
     include: [{model: Products}, {model: ProductTag}] 
    })
    res.status(200).json(allTag)
   } catch (err) {
    res.status(500).json(err)
   }
});

router.get('/:id', async (req, res) => {
  try{
    const TagById = await Tag.findByPk(req.params.id, {
      include: [{model: Products}, {model: ProductTag}]
      })
      if(!deleteTag){
      res.status(404).json('No Tag with this id to delete')
  }
  res.status(200).json(TagById)
} catch(err) {
  res.status(500).json(err)
}
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((Tag) => { 
  if (req.body.tagIds.length) {
    const tagIdArr = req.body.tagIds.map((tag_id) => {
      return {
        Tag_id: Tag.id,
        tag_id,
      };
    });
    return Tag.bulkCreate(tagIdArr);
  }
  // if no Tag tags, just respond
  res.status(200).json(product);
})
.then((tagIds) => res.status(200).json(tagIds))
.catch((err) => {
  console.log(err);
  res.status(400).json(err);
});
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try{
    const deleteTag = await Tag.destroy(req.params.id, { 
      include: [{model: Category}]
    })
    
  res.status(200).json(deleteTag)
  } catch(err) {
    res.status(500).json
  }
});

module.exports = router;
