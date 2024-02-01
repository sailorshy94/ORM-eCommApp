const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // TODO: find all categories
  // be sure to include its associated Products
  constCategData = await Category.findAll({ include: [{ 
    model: Product
  }]})
});

router.get('/:id', async (req, res) => {
  // TODO: find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // TODO: create a new category
});

router.put('/:id', async (req, res) => {
  // TODO: update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // TODO: delete a category by its `id` value
});

module.exports = router;
