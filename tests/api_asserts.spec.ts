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

  expect(contentType).toContain("application/json");
});

test("Regres.in body.page tests", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users", {
    params: {
      page: 2,
    },
  });

  const responseBody = await response.json();
  const responsePageElement = responseBody.page;

  // * element page existuje v response
  expect(responsePageElement).toBeDefined();

  // * page je number (číslo)
  expect(typeof responsePageElement).toBe("number");

  // * page = 2
  expect(responsePageElement).toBe(2);
});

// Metoda
// GET
// URL
// https://reqres.in/api/users?page=2
// Kontrolovaná hodnota z body:
// Body obsahuje page
// page je číslo
// page je 2
// Test
//
