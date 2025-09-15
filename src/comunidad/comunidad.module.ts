import { Module } from '@nestjs/common';
import { ComunidadService } from './comunidad.service';
import { ComunidadController } from './comunidad.controller';
import { PrismaService } from '../prisma/prisma.service';
import { CarService } from 'src/car/car.service';

@Module({
  controllers: [ComunidadController],
  providers: [ComunidadService, PrismaService,CarService],
})
export class ComunidadModule {}
