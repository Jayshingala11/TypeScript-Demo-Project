import { DataType, Model, Table, Column, BelongsTo, BelongsToMany, ForeignKey } from "sequelize-typescript";

import sequelize from "../utils/database/dbconfig";

import UserModel from "./userModel";
import CartModel from "./cartModel";
import CartItemModel from "./cartItemModel";

interface ProductModel {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Table
class Product extends Model<ProductModel> {

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING, 
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.DECIMAL(10, 2), 
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.STRING, 
    allowNull: false,
  })
  imageUrl!: string;

  @Column({
    type: DataType.TEXT, 
    allowNull: false,
  })
  description!: string;

  @ForeignKey(() => UserModel)
  @BelongsTo(() => UserModel)
  user!: UserModel;

  @BelongsToMany(() => CartModel, () => CartItemModel)
  carts!: CartModel[];
}

export default Product;





// const Product = sequelize.define<ProductModel>(
//   "product",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     title: DataTypes.STRING,
//     price: {
//       type: DataTypes.DOUBLE,
//       allowNull: false,
//     },
//     imageUrl: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     paranoid: true,
//   }
// );


// Product.belongsTo(UserModel, { onDelete: "CASCADE" });
// Product.belongsToMany(CartModel, { through: CartItemModel });


