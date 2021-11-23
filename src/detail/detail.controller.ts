import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { DetailService } from "./detail.service";
import { CreateDetailDto } from "./dto/create-detail.dto";

@Controller("/api/me/detail")
export class DetailController {
  constructor(private readonly detailService: DetailService) {}

  @Post()
  create(@Body() createHomeDetailDto: CreateDetailDto) {
    return this.detailService.create(createHomeDetailDto);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    try {
      return this.detailService.findOne(+id);
    } catch (err) {
      console.log(err);
    }
  }
}
