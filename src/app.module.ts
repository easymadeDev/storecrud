import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product/entity/productEntity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [
    ProductModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),

   

    DatabaseModule
      ],
  controllers: [],
  providers: [],
})
export class AppModule {}