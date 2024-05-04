const request = require("supertest");
require("../config/db");
const app = require("../index.js");

// describe(" Endpoints", () => {
//   it("should get all posts", async () => {
//     const res = await request(app).get("/posts");
//     expect(res.status).toEqual(200);
//     expect(res.body).toBeDefined();
//     expect(res.body).toHaveProperty("data");
//     expect(Array.isArray(res.body.data)).toBe(true);
//   });

//   //

//   it("should get one post", async () => {
//     const res = await request(app).get("/posts/649f61a554ad2b878e595b6c");
//     expect(res.status).toEqual(200);
//     expect(res.body).toBeDefined();
//     expect(res.body).toHaveProperty("data");
//     expect(res.body.data).toHaveProperty("_id");
//     expect(res.body.data).toHaveProperty("body");
//   });

// it("should create a new user", async () => {
//   const res = await request(app)
//     .post("/api/v1/users/signup")
//     // .set(
//     //   "Authorization",
//     //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QiLCJpZCI6IjY0OWY1YWFkYTdhYzY2MWVmMTE1Mjg5ZiIsImlhdCI6MTY4ODMxNTAxNn0.joc_9tBrRaiwzhzDAYnjViNkc62L8l-F3Sd4Umnzp9w"
//     // )
//     .send({
//       email: "doe@gmail.com",
//       password: "testing",
//     });
//   expect(res.statusCode).toEqual(201);
//   //expect(res.body).toHaveProperty("data");
// });

it("should create a new user", async () => {
  try {
    const res = await request(app).post("/api/v1/users/signup").send({
      email: "doe@gmail.com",
      password: "testing",
    });

    // Check if the request was successful
    expect(res.statusCode).toEqual(201);

    // Optionally, check the response body for specific data
    // For example, expect(res.body).toHaveProperty("data");
  } catch (error) {
    // Handle any errors that occur during the test
    fail(error);
  }
}, 50000); // Set timeout to 10 seconds
