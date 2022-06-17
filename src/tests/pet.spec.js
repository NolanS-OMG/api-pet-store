const app = require("../app.js");
const request = require("supertest");

describe("GET /pets", ()=>{

  test("Should respond with a 200 status code", async () => {
    const response = await request(app).get("/pets").send();
    expect(response.statusCode).toBe(200);
  });

  test("Should respond with an array", async () => {
    const res1 = await request(app).post("/pets").send({name: "Carlitos"});
    const response = await request(app).get("/pets").send();
    expect(Array.isArray(response.body)).toBe(true);
  });

});

describe("POST /pets", () => {
  test("Should respond with a 200 status code", async () => {
    const response = await request(app).post("/pets").send({
      name: "Firulais0"
    });
    expect( response.statusCode ).toBe(200);
  });
  test("Should have an 'application/json' in header", async () => {
    const response = await request(app).post("/pets").send({
      name: "Firulais"
    });
    expect( response.headers["content-type"] ).toEqual( expect.stringContaining("json") );
  });
});

describe("GET /pets/1", () => {
  test("Should respond with a 200 status code", async () => {
    const response = await request(app).get("/pets/1").send();
    expect( response.statusCode ).toBe(200);
  });
});