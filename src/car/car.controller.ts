import { Controller, Post, Body  } from "@nestjs/common";
import { CreateCarDto } from "./dto/create-car.dto";
import { CarService } from "./car.service";

@Controller('cars')
export class CarController {

 constructor(private carService:CarService) {}


 @Post()
   create(@Body() newCar: CreateCarDto) {
    return this.carService.create(newCar);

  } 




}



 


    // Aquí irán los endpoints relacionados con 