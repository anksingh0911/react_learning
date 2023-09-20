import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import RestaurantCard, { withPromotedLabel } from "../components/RestaurantCard";
import MOCK_DATA from '../MockData/RestaurantCardMock.json';

it("RestaurantCard should be rendered", ()=>{
  render(
    <RestaurantCard resData={MOCK_DATA}/>
  );
  const name = screen.getByText('Biggies Burger');
  expect(name).toBeInTheDocument()
})

it("RestaurantCard should be rendered", ()=>{
  const HOCComponent = withPromotedLabel(()=>(
  <>
  <RestaurantCard resData={MOCK_DATA}/>
  </>))
  render(<HOCComponent  />)
  const label = screen.getByText('Promoted');
  expect(label).toBeInTheDocument()
})