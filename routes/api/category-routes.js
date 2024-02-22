const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categData = await Category.findAll({
    include: [{
      model: Product,
      attributes: ['product_name']
    }]
  });
  return res.json(categData);
});

router.get('/:id', async (req, res) => {
  // TODO: find one category by its `id` value
  // be sure to include its associated Products
  const categData = await Category.findByPk(req.params.id);
  // not sure about the include part - where should it go?
  return res.json(categData);
  // ({
  // include: [{
  //   model: Product,
  //   attributes: ['product_name']
  // }]
});


router.post('/', async (req, res) => {
  // TODO: create a new category
  const categData = await ({});
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categData = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    });
  return res.json(categData);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.json(categData);
});

module.exports = router;
