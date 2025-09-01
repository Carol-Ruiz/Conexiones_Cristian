import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComunidadService } from './comunidad.service';
import { CreateComunidadDto } from './dto/create-comunidad.dto';
import { UpdateComunidadDto } from './dto/update-comunidad.dto';

@Controller('comunidad')
export class ComunidadController {
  constructor(private readonly comunidadService: ComunidadService){}

  //inyeccion de dependencias:
  // inyectar un componente para uso en otro
  // sin tener que instanciarlo
  @Post()
  create(@Body()body ) {
    return this.comunidadService.create(body)
  }

  @Get()
  findAll() {
    return this.comunidadService.findAll() ;
  }

  // Consultar una comunidad por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comunidadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aqui se va a actualizar la comunidad con ID: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      "Succes": true,
      "mensaje": this.comunidadService.remove(+id)
    }
}
}