import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Detail } from './detail/entities/detail.entity';
import { DetailModule } from './detail/detail.module';

@Module({
  imports: [
    DetailModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test_db',
      entities: [Detail],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}