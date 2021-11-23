import { Module } from '@nestjs/common';
import { DetailService } from './detail.service';
import { DetailController } from './detail.controller';
import { Detail } from './entities/detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailRepository } from './detail.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Detail])],
  controllers: [DetailController],
  providers: [DetailService]
})
export class DetailModule {}