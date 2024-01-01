import { ValidationChain, body } from "express-validator";

class AuthValidation {
  validateLogin: ValidationChain[] = [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid Email!")
      .isString()
      .normalizeEmail()
      .notEmpty(),
    body("password")
      .notEmpty()
      .withMessage("Please enter a Password!")
      .isString()
      .withMessage("Please enter a type string as a Password!")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long!")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter!")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter!")
      .matches(/[0-9]/)
      .withMessage("Password must contain at least one number!")
      .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)
      .withMessage("Password must contain at least one special character!"),
  ];
}

export default new AuthValidation();
