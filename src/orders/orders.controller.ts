import { Controller, Post, Put, Body, Param } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { CreateOrderDto, UpdateOrderDto } from "./dto/index.dto";

@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Put(":id")
  async update(
    @Body() updateOrderDto: UpdateOrderDto,
    @Param("id") id: string,
  ) {
    return this.ordersService.update(id, updateOrderDto);
  }
}
