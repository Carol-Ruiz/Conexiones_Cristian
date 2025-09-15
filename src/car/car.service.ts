import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarService {

  constructor(private prisma:PrismaService) {}

  async create(newCar: CreateCarDto) {
    return await this.prisma.car.create({
      data: {
      plate: newCar.plate,
      release_date: new Date(newCar.release_date),
      is_available: newCar.is_available,
      price: newCar.price,
      comunidad: {connect: {id: newCar.comunidad_id} }
    }
  })
}}