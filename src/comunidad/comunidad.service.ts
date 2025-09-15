import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Comunidad } from '@prisma/client';

@Injectable()
export class ComunidadService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todas las comunidades
  async findAll(): Promise<Comunidad[]> {
    return this.prisma.comunidad.findMany();
  }

  // Buscar comunidad por id
  async findOne(id: number): Promise<Comunidad | null> {
    return this.prisma.comunidad.findUnique({
      where: { id },
    });
  }

  // Crear una nueva comunidad
  async create(data: Omit<Comunidad, 'id'>): Promise<Comunidad> {
    return this.prisma.comunidad.create({
      data,
    });
  }

  // Eliminar comunidad por id
  async remove(id: number): Promise<Comunidad> {
    return this.prisma.comunidad.delete({
      where: { id },
    });
  }
}
