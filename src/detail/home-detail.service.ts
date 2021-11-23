import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHomeDetailDto } from './dto/create-home-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HomeDetail } from './entities/home-detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HomeDetailService {
  constructor(
    @InjectRepository(HomeDetail)
    private homeDetailRepository: Repository<HomeDetail>,
  ) {}

  async create(createHomeDetailDto: CreateHomeDetailDto): Promise<HomeDetail> {
    try {
      const data: HomeDetail = await this.homeDetailRepository.create(createHomeDetailDto); // adding new data
      return this.homeDetailRepository.save(data);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  async findOne(id: number) {
    return await this.homeDetailRepository.findOne(id);
  }
}
