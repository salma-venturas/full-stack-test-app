import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeDetail } from './detail/entities/home-detail.entity';
import { HomeDetailModule } from './detail/home-detail.module';

@Module({
  imports: [
    HomeDetailModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test_db',
      entities: [HomeDetail],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}