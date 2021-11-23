import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { HomeDetail } from "./entities/home-detail.entity";
import { HomeDetailController } from "./home-detail.controller";
import { HomeDetailService } from "./home-detail.service";

describe("HomeDetailController", () => {
  let homeDetailController: HomeDetailController;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeDetailController],
      providers: [
     
      ],
    }).compile();

    homeDetailController =
      module.get<HomeDetailController>(HomeDetailController);
  });


});
