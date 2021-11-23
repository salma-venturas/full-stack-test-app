import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { HomeDetail } from "./entities/home-detail.entity";
import { HomeDetailController } from "./home-detail.controller";
import { HomeDetailService } from "./home-detail.service";

describe("HomeDetailController", () => {
  let homeDetailController: HomeDetailController;

  const mockService = {
    create: jest.fn(),
    findOne: jest.fn(),
  };

  const mockHomeDetailRepository = {
    create: jest.fn(),
    save: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeDetailController],
      providers: [
        { provide: HomeDetailService, useValue: mockService },
        {
          provide: getRepositoryToken(HomeDetail),
          useValue: mockHomeDetailRepository,
        },
      ],
    }).compile();

    homeDetailController =
      module.get<HomeDetailController>(HomeDetailController);
  });


});
