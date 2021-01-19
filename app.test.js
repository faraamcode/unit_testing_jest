const { it, expect } = require("@jest/globals")
const isItGood = require("./app-test-runner")
it("works", ()=>{
 expect(1).toBe(2)
})
it("works", ()=>{
 expect(
  isItGood({
 items : [
  {name: "dragon food", price: 8, quantity: 8},
  {name: "dragon cake", price: 800, quantity: 2}
 ] 
}
)
 ).toBe(1664)
})
