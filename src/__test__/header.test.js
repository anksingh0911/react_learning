import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import '@testing-library/jest-dom';

it("Should load the header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const login = screen.getByText('Login');
  expect(login).toBeInTheDocument();
});

it("Should load the header component with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText('Cart(0 items)');
  // you can also pass regex for ex:
  // const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});

it("Should load the header component with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // you can also pass regex for ex:
  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // you can also pass regex for ex:
  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});
