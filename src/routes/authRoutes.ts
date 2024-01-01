import express from 'express';

import authController from '../controllers/authController';
import authValidation from '../utils/validation/authValidation';

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/postLogin', authValidation.validateLogin, authController.postLogin);

export default router;