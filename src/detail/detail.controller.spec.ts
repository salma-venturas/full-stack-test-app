import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Detail } from "./entities/detail.entity";
import { DetailController } from "./detail.controller";
import { DetailService } from "./detail.service";

describe("DetailController", () => {
  let homeDetailController: DetailController;

  const mockService = {
    create: jest.fn(),
    findOne: jest.fn(),
  };

  const mockDetailRepository = {
    create: jest.fn(),
    save: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailController],
      providers: [
        { provide: DetailService, useValue: mockService },
        {
          provide: getRepositoryToken(Detail),
          useValue: mockDetailRepository,
        },
      ],
    }).compile();

    homeDetailController =
      module.get<DetailController>(DetailController);
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
