export class UpdateOrderDto {
  readonly customerName?: string;
  readonly orderDate?: Date;
  readonly items?: Array<{ productId: number; quantity: number }>;
}
