import { Controller, Post, Get,Patch, Delete,Param, Body  } from "@nestjs/common";
import { CreateCarDto } from "./dto/create-car.dto";
import { CarService } from "./car.service";

@Controller('cars')
export class CarController {

 constructor(private carService:CarService) {}


 @Post()
   create(@Body() newCar: CreateCarDto) {
    return this.carService.create(newCar);

  } 

  //Consultar un carro por id

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.carService.findById(parseInt(id))

}

//Consultar todos los carros

@Get()
findAll() {
  return this.carService.findAll();
}


//Borrar un carro por id 

@Delete(':id')
remove (@Param('id') id: string) {
return this.carService.delete(parseInt(id));
}


}
   