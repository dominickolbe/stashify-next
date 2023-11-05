import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerName: string;

  @Column()
  orderDate: Date;

  @Column("json")
  items: Array<{ productId: number; quantity: number }>;
}
