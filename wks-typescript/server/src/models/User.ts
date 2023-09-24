/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
@Table
class User extends Model<User> {
  @Column({
    allowNull: false
  })
  name!: string;

  @Column({
    allowNull: false
  })
  lastName!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}

export default User;
