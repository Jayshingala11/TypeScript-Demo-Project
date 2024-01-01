import { Request, Response } from "express";
import { validationResult } from "express-validator";

class AuthController {
  getLogin = async (req: Request, res: Response): Promise<void> => {
    res.render("login", { pageTitle: "Login" });
  };

  getSignup = async (req: Request, res: Response): Promise<void> => {
    res.render("signup", { pageTitle: "Signup" });
  };

  postLogin = async (req: Request, res: Response): Promise<any> => {
    try {
      const result = validationResult(req);
      const errors = result.array();

      if (errors.length !== 0) {
        return res.status(200).json({ success: false, error: errors[0].msg });
      }

      const { email, password } = req.body;
      
      
    } catch (error) {
      console.log(error);
    }
  };
}

export default new AuthController();
