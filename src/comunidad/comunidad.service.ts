import { Injectable } from '@nestjs/common';
import { CreateComunidadDto } from './dto/create-comunidad.dto';
import { UpdateComunidadDto } from './dto/update-comunidad.dto';
import { Comunidad } from './entities/comunidad.entity'; 
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ComunidadService {
  constructor(
   private prisma: PrismaService


  ) {}

  // Método que retorna todo el array
  findAll() {
    return this.prisma.comunidad.findMany();
  }

  // Método para buscar la comunidad por id
  findOne(id: number){
  
}

//Añadir al arreglo de comunidad
// la comunidad que esta llegando por el body 

 create(body){
}
//eliminar un elemento del arreglo
//  de comunidad por id

 remove(id:number){

}
}
