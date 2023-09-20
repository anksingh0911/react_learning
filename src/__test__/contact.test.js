import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import '@testing-library/jest-dom'

describe("contact us page test cases", ()=>{
  test("Contact us component should be rendered", ()=>{
    render(<Contact/>);
    const heading = screen.getByRole('heading');
  
    // Assertion
    expect(heading).toBeInTheDocument();
  });
  
  test("should be button inside the contact us", ()=>{
    render(<Contact/>);
    // const button = screen.getByRole('button');
    const button  = screen.getByText('Submit')
  
    // Assertion
    expect(button).toBeInTheDocument();
  });
  
  test("should be name filed inside the contact us", ()=>{
    render(<Contact/>);
    const inputName  = screen.getByPlaceholderText('Name')
    // Assertion
    expect(inputName).toBeInTheDocument();
  });
  
  test("should be query filed inside the contact us", ()=>{
    render(<Contact/>);
    const inputName  = screen.getByPlaceholderText('Query')
    // Assertion
    expect(inputName).toBeInTheDocument();
  });
  
  // in case you render all input field
  test("should be query filed inside the contact us", ()=>{
    render(<Contact/>);
    const inputBoxes  = screen.getAllByRole('textbox')
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
})
