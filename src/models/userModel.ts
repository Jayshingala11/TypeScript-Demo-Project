import { DataType, Model, Table, Column, HasMany, HasOne } from 'sequelize-typescript';

import sequelize from '../utils/database/dbconfig';

import ProductModel from './productModel';
import CartModel from './cartModel';
import OrderModel from './orderModel';

interface UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  resetToken?: string | null;
  resetTokenExpiration?: Date | null;
}

@Table
class User extends Model<UserModel> {
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
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
  })
  resetToken?: string | null;

  @Column({
    type: DataType.DATE,
  })
  resetTokenExpiration?: Date | null;

  @HasMany(() => ProductModel)
  products!: ProductModel[];

  @HasOne(() => CartModel)
  cart!: CartModel;

  @HasMany(() => OrderModel)
  orders!: OrderModel[];
}

export default User;









// import { DataTypes } from "sequelize";
// import { Model } from 'sequelize-typescript';

// import sequelize from "../utils/database/dbconfig";
// // import models from "./indexModel";
// import ProductModel from "./productModel";
// import CartModel from "./cartModel";
// import OrderModel from "./orderModel";

// interface IUser {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   resetToken?: string | null;
//   resetTokenExpiration?: Date | null;
// }

// interface UserModel extends Model<IUser>, IUser {}

// const UserModel = sequelize.define<UserModel>("user", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   name: DataTypes.STRING,
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   resetToken: {
//     type: DataTypes.STRING,
//   },
//   resetTokenExpiration: DataTypes.DATE,
// });

// UserModel.hasMany(ProductModel, { onDelete: "CASCADE" });
// UserModel.hasOne(CartModel);
// UserModel.hasMany(OrderModel);

// // User.associate = (models: { productModel: ModelStatic<Model<any, any>>; cartModel: ModelStatic<Model<any, any>>; orderModel: ModelStatic<Model<any, any>>; }) => {
// // };

// export default UserModel;
