import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, HttpStatus } from "@nestjs/common";
import * as request from "supertest";
import { DetailModule } from "../src/detail/detail.module";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Detail } from "../src/detail/entities/detail.entity";
import { response } from "express";
import { DetailService } from "../src/detail/detail.service";

describe("E2E Tests for DeatilController Endpoints", () => {
  let app = `http://localhost:3000`;

  beforeEach(async () => {});

  it("should create a data", () => {
    const data = {
      title: "My Travel Plans for 2020",
      body: "Plans to travel to Kenya",
    };
    return request(app)
      .post("/api/me/detail")
      .set("Accept", "application/json")
      .send(data)
      .expect(HttpStatus.CREATED)
      .expect((res) => {
        expect(res.body).toHaveProperty("title");
      });
  });

  it("should get a data", () => {
    return request(app)
      .get("/api/me/detail/1")
      .set("Accept", "application/json")
      .expect(HttpStatus.OK)
      .expect((res) => {
        expect(res.body).toHaveProperty("title");
      });
  });
});
