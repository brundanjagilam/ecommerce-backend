// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  addReview,
  getFeaturedProducts,
  getCategories
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/auth');

router.route('/')
  .get(getProducts)
  .post(protect, admin, createProduct);

router.get('/featured', getFeaturedProducts);
router.get('/categories', getCategories);

router.route('/:id')
  .get(getProduct)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

router.post('/:id/reviews', protect, addReview);

module.exports = router;