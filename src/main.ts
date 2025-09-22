import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //activar validaciones globales 
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,//elimina propiedades que no esten 
                    // en los dto
    forbidNonWhitelisted: true,//lanza error en caso de que 
                               // los dto que se tengan en el body 
                               // atributos o propiedades no esten 
                               // definidas en el dto  
    transform: true // convierte los tipos del body automaticamente
                    // a los tipos del dto         
                    
                    
  }));
  await app.listen(process.env.PORT ?? 3010);
}
bootstrap();
