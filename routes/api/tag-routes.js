const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// TODO: add try...catch to each crud

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tagData = await Tag.findAll(
    {
      model: Product,
      through: ProductTag,
      attributes: ['product_name']
    })
  return res.json(tagData);
});


router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag = await Tag.findByPk(req.params.id,
    {
      model: Product,
      through: ProductTag,
      attributes: ['product_name']
    });
  return res.json(tag);
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body);
    return res.json(200).json(tag);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const tag = await Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      }
    });
  return res.json(tag);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tag = await Tag.destroy({
    where: {
      id: req.params.id,
    }
  });
  return res.json(tag);
});

module.exports = router;
