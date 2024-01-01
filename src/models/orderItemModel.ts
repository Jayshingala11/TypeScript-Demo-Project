import { DataType, Model, Table, Column } from "sequelize-typescript";

import sequelize from "../utils/database/dbconfig";

interface OrderItemModel {
  id: number;
  quantity: number;
}

@Table
class OrderItem extends Model<OrderItemModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;
}

export default OrderItem;
