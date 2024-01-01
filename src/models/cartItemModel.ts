import { DataType, Model, Table, Column } from "sequelize-typescript";

import sequelize from "../utils/database/dbconfig";


interface CartItemModel {
  id: number;
  quantity: number;
}


@Table
class CartItem extends Model<CartItemModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;
}



export default CartItem;