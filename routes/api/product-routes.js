const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  const prodData = await Product.findAll({
    include: [{
      model: Category,
      attributes: ['category_name']
    },
    // {
    //   model: Tag,
    //   attributes: ['tag_name']
    // },
  {
    model: ProductTag,
    attributes: ['product_name','tag_name']
  }]
  });
  return res.json(prodData);
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  const product = await Product.findByPk(req.params.id,
    {
      include: [{
        model: Category,
        attributes: ['category_name']
      },
      // does it also need tag or just prodtag???
      // {
      //   model: Tag,
      //   attributes: ['tag_name']
      // },
      {
        model: ProductTag,
        attributes: ['product_name','tag_name']
      }]
  });
  return res.json(product);
});

// create new product
router.post('/', async (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  try {
    const product = await Product.create(req.body);
    // if there's product tags, we need to create pairings by using the setTags method
    if (req.body.tagIds) {
      await product.setTags(req.body.tagIds);
      await product.save();
      return res.status(200).json(await product.getTags());
    }
    // if no product tags, just respond
    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// update product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [Tag],
    });
    // update product data
    product.update(req.body);
    // if there's product tags, we need to create pairings by using the setTags method
    if (req.body.tagIds) {
      await product.setTags(req.body.tagIds);
    }
    await product.save();
    await product.reload();
    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  const product = await Product.destroy({
    where: {
      id: req.params.id,
    }
  });
  return res.json(product);
});

module.exports = router;
