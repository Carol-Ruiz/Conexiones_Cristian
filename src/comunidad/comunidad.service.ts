import { Injectable } from '@nestjs/common';
import { CreateComunidadDto } from './dto/create-comunidad.dto';
import { UpdateComunidadDto } from './dto/update-comunidad.dto';
import { Comunidad } from './entities/comunidad.entity'; // 👈 Importação que estava faltando

@Injectable()
export class ComunidadService {
  // Propiedad privada
  private comunidad: Comunidad[] = [
    {
      id: 1,
      name: 'Toyota',
      descripcion: 'Marca japonesa',
      createAt: new Date(),
    },
    {
      id: 2,
      name: 'Byd',
      descripcion: 'Vehículos eléctricos',
      createAt: new Date(),
    },
    {
      id: 3,
      name: 'Ferrari',
      descripcion: 'Vehículos de lujo',
      createAt: new Date(),
    },
  ];

  // Método que retorna todo el array
  findAll(): Comunidad[] {
    return this.comunidad;
  }

  // Método para buscar la comunidad por id
  findOne(id: number): Comunidad | undefined {
  let comunidad = this.comunidad.find((comunidad) => comunidad.id === id);
  return comunidad;
}

//Añadir al arreglo de comunidad
// la comunidad que esta llegando por el body 

create(body){
  this.comunidad.push(body)
  return body;
}
//eliminar un elemento del arreglo
//  de comunidad por id

remove(id:number): string {
  //filter: retornar un nuevo arreglo con elementos 
  // que cumplan la condicional 
  this.comunidad = this.comunidad.filter(
    function(comunidad){
      return comunidad.id !== id
    }
  )
  return "Elemento eliminado"
}
}
