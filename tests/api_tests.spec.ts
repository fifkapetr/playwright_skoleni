import { test } from "@playwright/test";

test("GET Request", async ({ request }) => {
  await request.get("https://restful-booker.herokuapp.com/booking");
});

test("GET Users, page 2", async ({ request }) => {
  await request.get("https://reqres.in/api/users", {
    params: {
      page: 2,
    },
  });
});

test("GET Booking with Header", async ({ request }) => {
  await request.get("https://restful-booker.herokuapp.com/booking", {
    headers: {
      "Accept-Language": "en-US,en;q=0.9,cs-CZ;q=0.8,cs;q=0.7,it;q=0.6",
    },
  });
});

test("Restful POST Auth with body", async ({ request }) => {
  await request.post("https://restful-booker.herokuapp.com/auth", {
    data: {
      username: "admin",
      password: "password123",
    },
  });
});

test("Update Booking with authorized request - transfer data", async ({
  request,
}) => {
  const authResponse = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: "admin",
        password: "password123",
      },
    }
  );

  const responseBody = await authResponse.json();
  console.log(responseBody);
  const token = responseBody.token;
  console.log(token);

  const preparedHeaders = {
    "Content-Type": "application/json", // * redudantní - playwright tuto hlavičku používá automaticky
    Accept: "application/json",
    Cookie: `token=${token}`,
  };

  const preparedBody = {
    firstname: "James",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
  };

  await request.put("https://restful-booker.herokuapp.com/booking/1182", {
    headers: preparedHeaders,
    data: preparedBody,
  });
});
