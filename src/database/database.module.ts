import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/entity/productEntity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory:(configService:ConfigService)=>({
              type: 'mysql',
              host: configService.getOrThrow('DB_HOST'),
              port: configService.getOrThrow('DB_PORT'),
              username: configService.getOrThrow('DB_USERNAME'),
              password: configService.getOrThrow('DB_PASSWORD'),
              database: configService.getOrThrow('DB_NAME'),     
              entities: [ProductEntity],
              synchronize: true,
            }),
              inject:[ConfigService]
          }),
        ]
})
export class DatabaseModule {}
