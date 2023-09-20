import { screen, render, prettyDOM, fireEvent } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import '../../matchMedia';
import Body from "../components/Body";
import MOCK_DATA from '../MockData/mockRestaurantListData.json';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: ()=> {
     return Promise.resolve(MOCK_DATA)
    }
  })
});

it("Should render the body component with search button", async () => {
 await act( async ()=> render(
  <BrowserRouter>
    <Body/>
  </BrowserRouter>
 ))
 const cardBeforeSearch = screen.getAllByTestId('resCard');
 expect(cardBeforeSearch.length).toBe(20)
 const searchButton = screen.getByRole('button',{name: 'Search'});
 const searchInput = screen.getByTestId("searchInput");
 fireEvent.change(searchInput,{target:{value:"burger"}});
 fireEvent.click(searchButton);

//  screen should have filter 
const cards  = screen.getAllByTestId("resCard")
expect(cards.length).toBe(1)

//  expect(button).toBeInTheDocument()
});

it("Should filter top rated restaurant ", async () => {
  await act( async ()=> render(
   <BrowserRouter>
     <Body/>
   </BrowserRouter>
  ))
  const cardBeforeFilter= screen.getAllByTestId('resCard');
  expect(cardBeforeFilter.length).toBe(20)
  const topRatedButton = screen.getByRole('button',{name: 'Top Rated'});
  fireEvent.click(topRatedButton);
 
 //  screen should have filter 
 const cardsAfterFilter  = screen.getAllByTestId("resCard")
 expect(cardsAfterFilter.length).toBe(11)
 
 //  expect(button).toBeInTheDocument()
 });
 