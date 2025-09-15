import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
   constructor(private prisma: PrismaService){}

   /**
    * Registrar una nueva categoria en bases de datos
    * @param createUsuarioDto : los datos esperados de la nueva categoria
    */

 async create(crearUsuario: CreateUsuarioDto){
  return await this.prisma.usuario.create({
    data: {
        username: crearUsuario.username,
        password: crearUsuario.password
    }
  })
}



  async findAll() {
    return this.prisma.usuario.findMany()
  }


  async findOne(id: number) {
    return await this.prisma.usuario.findFirst({
      where: {id: id}

    })
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }


async remove(id: number) {
  await this.prisma.usuario.delete({   
    where: { id: id }                  
  });

  return {
    status: "Success",
    id: id
  };
}

}

