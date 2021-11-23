import { EntityRepository, IsNull, Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Detail } from './entities/detail.entity';
import { ResponseDetailDto } from './dto/response-detail.dto';
@Injectable()
@EntityRepository(Detail)
export class DetailRepository extends Repository<Detail> {
 
  async findOne(id) {
    try {
      return await this.findOneOrFail(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
