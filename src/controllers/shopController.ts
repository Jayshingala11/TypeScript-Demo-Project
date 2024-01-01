import { Request, Response, NextFunction } from "express";
import User from "../models/userModel";

class ShopController {
    getIndex = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const users = await User.findAll();
        console.log("users :::", users);
        res.render('home', { pageTitle: "Home" })
    }

    getCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.render('cart', { pageTitle: "Cart" })
    }

    getOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.render('order', { pageTitle: "Order" })
    }

    getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.render('add-product', { pageTitle: "Add Product" })
    }

    getAdminProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.render('admin-products', { pageTitle: "Admin Products" })
    }
}

export default new ShopController;