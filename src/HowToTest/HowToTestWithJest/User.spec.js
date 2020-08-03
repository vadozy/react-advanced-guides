import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./User";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    // Promise.resolve({
    //   json: () => Promise.resolve(fakeUser)
    // })
    new Promise(resolve => {
      setTimeout(() => {
        resolve({
          json: () => Promise.resolve(fakeUser)
        })
      }, 100);
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User id="123" />, container);
    await new Promise(resolve => setTimeout(() => resolve(42), 1000));
  });

  expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
  expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
  expect(container.textContent).toContain(fakeUser.address);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});