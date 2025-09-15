//DTO: Data Transfer Object
//Objeto de trasnfencia de datos:
//Sirve para transformar la informacion 
// que transita de un lugar a otro en un proyecto
//Proposito: 
// -asegurar el ingreso de la informacion 
// correcta desde el exterior(cliente http, app movil)
//  - Validar esa informacion (atributos correctos,
// tipos de dato, longitudes, tipos de archivo) 

// Los DTO solo se usan en los siguientes 
// casos de uso: 
//                crear 
//                actualizar
 
export class CreateUsuarioDto {


//contexto: Se espera que desde el cliente 
//          llegue el nombre de la categoria 
//          unicamente 

  username: string;
  password: string;
}

