import { Module } from '@nestjs/common';
import { ComunidadService } from './comunidad.service';
import { ComunidadController } from './comunidad.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ComunidadController],
  providers: [ComunidadService, PrismaService],
})
export class ComunidadModule {}
