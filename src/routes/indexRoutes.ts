import express from 'express';

import authRoutes from './authRoutes';
import shopRoutes from './shopRoutes';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/', shopRoutes);

export default router;