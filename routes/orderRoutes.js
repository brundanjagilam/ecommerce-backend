// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const {
  createOrder,
  getMyOrders,
  getOrder,
  updateOrderStatus,
  getAllOrders
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/auth');

router.route('/')
  .post(protect, createOrder)
  .get(protect, getMyOrders);

router.get('/admin/all', protect, admin, getAllOrders);

router.route('/:id')
  .get(protect, getOrder)
  .put(protect, admin, updateOrderStatus);

module.exports = router;
