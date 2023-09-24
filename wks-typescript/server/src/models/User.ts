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
  @Column
  name!: string;

  @Column
  lastName!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}

export default User;
