import { render,screen } from "@testing-library/react";
import user from "@testing-library/react"
import UserForm from "./Form/UserForm";

test("first test case",()=>{
    // render the components
    render(<UserForm/>);
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    //manipulate the components and find each elements
    expect(inputs).toHaveLength(3);
    expect(button).toBeInTheDocument();
});