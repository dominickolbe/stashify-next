export class CreateOrderDto {
  readonly customerName: string;
  readonly orderDate: Date;
  readonly items: Array<{ productId: number; quantity: number }>;
}
