import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Comunidad as PrismaComunidad } from '@prisma/client';

@Injectable()
export class ComunidadService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todas las comunidades
  async findAll(): Promise<PrismaComunidad[]> {
    return this.prisma.comunidad.findMany();
  }

  // Buscar comunidad por id
  async findOne(id: number): Promise<PrismaComunidad | null> {
    return this.prisma.comunidad.findUnique({
      where: { id },
    });
  }

  // Crear una nueva comunidad
  async create(data: Omit<PrismaComunidad, 'id'>): Promise<PrismaComunidad> {
    return this.prisma.comunidad.create({
      data,
    });
  }

  // Eliminar comunidad por id
  async remove(id: number): Promise<PrismaComunidad> {
    return this.prisma.comunidad.delete({
      where: { id },
    });
  }
}
