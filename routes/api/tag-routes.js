const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// TODO: add try...catch to each crud

router.get('/', async (req, res) => {
  // TODO: find all tags
  // be sure to include its associated Product data
  const tagData = await Tag.findAll({
    // {
    //   model: Product,
    //   through: ProductTag,
    //   attributes: ['product_name']
    // }]

  });
  return
});

router.get('/:id', async (req, res) => {
  // TODO: find a single tag by its `id`
  // be sure to include its associated Product data
  const tag = await Tag.findByPk({
// {
    //   model: Product,
    //   through: ProductTag,
    //   attributes: ['product_name']
    // }]
  });
  return res.json();
});

router.post('/', async (req, res) => {
  // TODO: create a new tag
  const tag = await Tag.create(req.body);
  // return res.json();
});

router.put('/:id', async (req, res) => {
  // TODO: update a tag's name by its `id` value
  const tagData = await Tag.update({
  },
  {
    where: {

    }
  });
  return res.json();
});

router.delete('/:id', async (req, res) => {
  // TODO: delete on tag by its `id` value
  const Tag = await Tag.destroy({
    where: {
      id: req.params.id,
    }
  });
  return res.json();
});

module.exports = router;
