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

test("GET Booking with header", async ({ request }) => {
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
  // * Provolání Auth requestu
  const authResponse = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: "admin",
        password: "password123",
      },
    }
  );

  // * Vytažení tokenu z response
  const responseBody = await authResponse.json();
  const token = responseBody.token;

  // * Nastavení proměnných pro Update request
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Cookie: "token=" + token, // ! Použití const token do hlavičky cookie
  };

  const data = {
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

  // * provolání requestu
  const response = await request.put(
    "https://restful-booker.herokuapp.com/booking/1182",
    {
      headers: headers, // * použití const headers
      data: data, // * použití const data
    }
  );
});
