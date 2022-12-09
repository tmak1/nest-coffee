import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Coffee, Prisma } from '@prisma/client';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Post()
  async create(
    @Body() coffeeCreateInput: Prisma.CoffeeCreateInput,
  ): Promise<Coffee> {
    return this.coffeesService.create(coffeeCreateInput);
  }

  @Get()
  async findAll(): Promise<Coffee[]> {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Coffee> {
    return this.coffeesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() coffeeUpdateInput: Prisma.CoffeeUpdateInput,
  ): Promise<Coffee> {
    return this.coffeesService.update(id, coffeeUpdateInput);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Coffee> {
    return this.coffeesService.remove(id);
  }
}
