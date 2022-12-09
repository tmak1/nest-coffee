import { Injectable } from '@nestjs/common';
import { Prisma, Coffee } from '@prisma/client';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class CoffeesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(coffeeCreateInput: Prisma.CoffeeCreateInput): Promise<Coffee> {
    console.log(coffeeCreateInput);
    return this.prisma.coffee.create({
      data: {
        ...coffeeCreateInput,
        flavours: {
          create: coffeeCreateInput.flavours,
        },
      },
      include: {
        flavours: true,
      },
    });
  }

  findAll(): Promise<Coffee[]> {
    return this.prisma.coffee.findMany();
  }

  findOne(id: string): Promise<Coffee> {
    return this.prisma.coffee.findUnique({
      where: {
        id,
      },
    });
  }

  update(
    id: string,
    coffeeUpdateInput: Prisma.CoffeeUpdateInput,
  ): Promise<Coffee> {
    return this.prisma.coffee.update({
      data: coffeeUpdateInput,
      where: {
        id,
      },
    });
  }

  remove(id: string): Promise<Coffee> {
    return this.prisma.coffee.delete({
      where: {
        id,
      },
    });
  }
}
