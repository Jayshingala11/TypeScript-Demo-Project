import { DataType, Model, Table, Column, BelongsTo, BelongsToMany, ForeignKey } from "sequelize-typescript";

import sequelize from "../utils/database/dbconfig";

import UserModel from "./userModel";
import ProductModel from "./productModel";
import CartItemModel from "./cartItemModel";

interface CartModel {
  id: number;
}

@Table
class Cart extends Model<CartModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => UserModel)
  @BelongsTo(() => UserModel)
  user!: UserModel;

  @BelongsToMany(() => ProductModel, () => CartItemModel)
  products!: ProductModel[];
}

export default Cart;





// const Cart = sequelize.define<CartModel>("cart", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
// });


// Cart.belongsTo(UserModel);
// Cart.belongsToMany(ProductModel, { through: CartItemModel });