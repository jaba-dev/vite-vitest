import {render, screen}from "@testing-library/react"
import Person from "./Person"

it("should have Person component",()=>{
 render(<Person first="Liam" last="Jones"/>)
const message = screen.queryByText(/person component/i)
expect(message).toBeVisible()
})