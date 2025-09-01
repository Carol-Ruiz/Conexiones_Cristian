import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
   constructor(private repositorio: PrismaService){}

   /**
    * Registrar una nueva categoria en bases de datos
    * @param createUsuarioDto : los datos esperados de la nueva categoria
    */


  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.repositorio.usuario.create({
    data: createUsuarioDto  
})

  }

  async findAll() {
    return this.repositorio.usuario.findMany()
  }

  async findOne(id: number) {
    return this.repositorio.usuario.findFirst()
    where: {id_usuario: id}
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

async remove(id: number) {
  await this.repositorio.usuario.delete({   
    where: { id: id }                  
  });

  return {
    status: "Success",
    id: id
  };
}

}

