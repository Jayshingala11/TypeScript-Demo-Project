import {
  DataType,
  Model,
  Table,
  Column,
  BelongsTo,
  BelongsToMany,
  ForeignKey,
} from "sequelize-typescript";

import sequelize from "../utils/database/dbconfig";

import UserModel from "./userModel";
import ProductModel from "./productModel";
import OrderItemModel from "./orderItemModel";

interface OrderModel {
  id: number;
}

@Table
class Order extends Model<OrderModel> {
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

  @BelongsToMany(() => ProductModel, () => OrderItemModel)
  products!: ProductModel[];
}

export default Order;







// const Order = sequelize.define<OrderModel>("order", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
// });

// Order.belongsTo(UserModel);
// Order.belongsToMany(ProductModel, { through: OrderItemModel });
