import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { VendorsModule } from './vendors/vendors.module';
import { ComunidadModule } from './comunidad/comunidad.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [CustomersModule, VendorsModule, ComunidadModule, PrismaModule, UsuarioModule, CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
