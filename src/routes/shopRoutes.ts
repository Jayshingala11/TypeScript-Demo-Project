import express from 'express';

import shopController from '../controllers/shopController';

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/add-product', shopController.getProducts);

router.get('/admin-products', shopController.getAdminProducts);

export default router;