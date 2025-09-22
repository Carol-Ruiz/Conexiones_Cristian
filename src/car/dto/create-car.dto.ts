import { IsBoolean, IsDate, IsDecimal, IsInt, IsNotEmpty } from "class-validator";

export class CreateCarDto {

 @IsNotEmpty({
     message: 'La placa es obligatoria'
 })
 plate: string;  


 @IsNotEmpty({
     message: 'La fecha de lanzamiento es obligatoria'
 })
 release_date: string;

 @IsNotEmpty()
 @IsBoolean()
 is_available : boolean;


 @IsNotEmpty({
   message: 'El precio es obligatorio'})
 @IsInt()
 price: number;


 @IsNotEmpty(
  {message: 'La comunidad es obligatoria'})
 @IsInt()
 comunidad_id: number;
}


