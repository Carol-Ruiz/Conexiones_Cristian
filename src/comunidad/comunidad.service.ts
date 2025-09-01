import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { comunidad } from '@prisma/client'; // 👈 Tipo generado automáticamente por Prisma

@Injectable()
export class ComunidadService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todas las comunidades
  async findAll(): Promise<comunidad[]> {
    return this.prisma.comunidad.findMany();
  }

  // Buscar comunidad por id
  async findOne(id: number): Promise<comunidad | null> {
    return this.prisma.comunidad.findUnique({
      where: { id },
    });
  }

  // Crear una nueva comunidad
  async create(data: Omit<comunidad, 'id'>): Promise<comunidad> {
    return this.prisma.comunidad.create({
      data,
    });
  }

  // Eliminar comunidad por id
  async remove(id: number): Promise<comunidad> {
    return this.prisma.comunidad.delete({
      where: { id },
    });
  }
}
