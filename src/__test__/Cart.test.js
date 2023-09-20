import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from '../MockData/RestaurantMenu.json';
import appStore from "../utils/appStore";
import '@testing-library/jest-dom';
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(()=>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  })
)
it("Should load restaurant menu component", async ()=>{
  await act ( async ()=>{
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
        <RestaurantMenu/>
        <Cart/>
      </Provider>
      </BrowserRouter>
    )
  })
  const accordionHeader = screen.getByText("Farali Special (3)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(3)
  const addBtn =  screen.getAllByRole('button',{name: "Add"})
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart(1 items)")).toBeInTheDocument();
  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart(2 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
  
  const clearCart = screen.getByRole('button', {name: "Clear Cart"});
  fireEvent.click(clearCart);
  expect(screen.getAllByTestId("foodItems").length).toBe(5);

})  