import { sum } from "../utils/sum"

test("Sum function should be calculate the sum of two numbers",()=>{
  const result =sum(2,3);
  //this line is known as Assertion
  expect(result).toBe(5)
})