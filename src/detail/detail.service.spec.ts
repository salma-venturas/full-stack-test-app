import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Detail } from "./entities/detail.entity";
import { DetailService } from "./detail.service";

describe("HomeDetailService", () => {
  let service: DetailService;
  const mockHomeDetailRepository = {
    create: jest.fn(),
    save: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DetailService,
        {
          provide: getRepositoryToken(Detail),
          useValue: mockHomeDetailRepository,
        },
      ],
    }).compile();

    service = module.get<DetailService>(DetailService);
  });

  it("should be create a new data and return", async () => {
    mockHomeDetailRepository.create.mockReturnValue({
      title: "qui est esse",
      body: "est rerum tempore",
    }),
      mockHomeDetailRepository.save.mockReturnValue({
        id: 1,
        title: "qui est esse",
        body: "est rerum tempore",
      });
    const data: Detail = await service.create({
      title: "qui est esse",
      body: "est rerum tempore",
    });
    expect(data).toStrictEqual({
      id: 1,
      title: "qui est esse",
      body: "est rerum tempore",
    });
  });

  it("should be retrive one data by id", async () => {
    mockHomeDetailRepository.findOne.mockReturnValue({
      id: 2,
      title: "This is test title",
      body: "This is test body",
    });
    const homes = mockHomeDetailRepository.findOne();
    expect(homes).toEqual({
      id: 2,
      title: "This is test title",
      body: "This is test body",
    });
  });
});
