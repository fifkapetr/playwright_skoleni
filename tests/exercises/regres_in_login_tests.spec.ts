import { test, expect } from "@playwright/test";

test("Token exists in regresin login response", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/login", {
    data: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
  });

  const responseBody = await response.json();
  const tokenValue = responseBody.token;

  expect(tokenValue).toBeDefined();
  expect(typeof tokenValue).toBe("string");
});
