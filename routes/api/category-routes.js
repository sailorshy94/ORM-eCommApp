const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categData = await Category.findAll(
      {
        include: [{
          model: Product,
          attributes: ['product_name']
        }]
      });
    return res.status(200).json(categData);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id,
      {
        include: [{
          model: Product,
          attributes: ['product_name']
        }]
      });
    return res.status(200).json(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body);
    return res.status(200).json(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      });
    return res.status(200).json(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
