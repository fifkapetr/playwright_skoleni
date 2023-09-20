import { test, expect } from "@playwright/test";

test("Booking API response is OK", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );
  expect(response.status()).toBe(200);
});

test("Booking Content-Type Header check", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );
  const headers = response.headers();
  const contentType = headers["content-type"];
  expect(contentType).toBe("application/json; charset=utf-8");
  // * Můžeme zkontrolovat i část headeru
  expect(contentType).toContain("application/json");
});

test("Regres.in body.page tests", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users", {
    params: {
      page: 2,
    },
  });

  const responseBody = await response.json();

  // * responseBody.page existuje
  expect(responseBody.page).toBeDefined();

  // * responseBody.page je typ number
  expect(typeof responseBody.page).toBe("number");

  // * responseBody.page je 2
  expect(responseBody.page).toBe(2);
});
