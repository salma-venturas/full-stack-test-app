import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { HomeDetail } from "./entities/home-detail.entity";
import { HomeDetailService } from "./home-detail.service";

describe("HomeDetailService", () => {
  let service: HomeDetailService;
 

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HomeDetailService,
       
      ],
    }).compile();

    service = module.get<HomeDetailService>(HomeDetailService);
  });
});
