import { test } from "@playwright/test";

test("Test API", async ({ request }) => {
  const resp = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );
  console.log(resp);
});
