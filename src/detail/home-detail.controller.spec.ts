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

  it("should create a data", () => {
    mockService.create.mockReturnValue({
      id: 1,
      title: "This is a create title",
      body: "This is a create body",
    });
    expect(
      homeDetailController.create({
        title: "This is a create title",
        body: "This is a create body",
      })
    ).toEqual({
      id: 1,
      title: "This is a create title",
      body: "This is a create body",
    });
  });

  it("should retrive data by id", async () => {
    mockService.findOne.mockReturnValue({
      id: 1,
      title: "This is a getting title",
      body: "This is a getting body",
    });
    const homes = homeDetailController.findOne("1");
    expect(homes).toEqual({
      id: 1,
      title: "This is a getting title",
      body: "This is a getting body",
    });
  });
});
