import request from "supertest";
import { app } from "./app";

describe("POST /api/sum", () => {
  test("testing sums", async () => {
    const response = await request(app).post("/api/sum").send({
      a: 5,
      b: 10,
    });
    expect(response.status).toBe(200);
    expect(response.body.data).toEqual(15);
  });
});
