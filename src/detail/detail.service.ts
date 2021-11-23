import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDetailDto } from './dto/create-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Detail } from './entities/detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetailService {
  constructor(
    @InjectRepository(Detail)
    private detailRepository: Repository<Detail>,
  ) {}

  async create(createDetailDto: CreateDetailDto): Promise<Detail> {
    try {
      const data: Detail = await this.detailRepository.create(createDetailDto); // adding new data
      return this.detailRepository.save(data);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  async findOne(id: number) {
    return await this.detailRepository.findOne(id);
  }
}
